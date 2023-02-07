<template>
  <div class="main ">
    <div class="bg-cover bg-center h-96 shadow-lg">
      <!-- grid rows 2 permet de séparer la page en deux en largueur -->
      <div class="grid auto-rows-max">
        <div class="bg-cover bg-center h-96 shadow-lg">

          <img src="@/assets/images/fond-profil.jpg" class="object-cover h-full w-full" />
        </div>
        <!-- cols pour séparer dans la longuer et relative sinon les tuilles ne vont pas sur l'image -->
        <div class="grid  gap-6 hover:cols-1 absolute">
          <h1 class="
              absolute font
              text-5xl text-black
              top-1/3 left-1/2
              -translate-x-1/2 -translate-y-1/2">
            APlanter
          </h1>
          <div class="container mx-auto">
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="@/assets/images/plante3.jpg" alt="Example image 1" class="h-56 w-80 object-cover" />
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <br>
                <p class="text-gray-600 text-base font-p font">{{ user.firstname }}</p>
                <p class="text-gray-600 text-base font-p font">{{ user.lastname }}</p>
                <p class="text-gray-600 text-base font-p font">{{ user.email }}</p>
                <p class="text-gray-600 text-base font-p font">{{ user.type_user }}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <!-- deuxième parti de l'écran -->
      <div class="container mx-auto py-2 px-6 shadow-lg">
        <h2 class="font text-2xl font-bold mb-4">Mes plantes à garder</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-44 lg:gap-x-24 lg:gap-y-10 gap-6">
          <CardCatalogue />
          <CardCatalogue />
          <CardCatalogue />
          <CardCatalogue />
          <CardCatalogue />
          <button class=" bg-white p-6 rounded-lg shadow-lg" type="add" @click="addPlant">
            <img src="../assets/images/add.png" alt="button ajout" border="0">
            <!-- TODO: Effacer logo lorsque camera est active -->

            <div id="app" class="web-camera-container">
              <div class="camera-button">
                <button type="button" class="button is-rounded"
                  :class="{ 'is-primary': !isCameraOpen, 'is-danger': isCameraOpen }" @click="toggleCamera">
                  <span class="font font-p" v-if="!isCameraOpen">Ajouter une plante</span>
                  <span class="font font-p" v-else>Annuler</span>
                </button>
              </div>

              <div v-show="isCameraOpen && isLoading" class="camera-loading">
                <ul class="loader-circle">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash': isShotPhoto }">

                <div class="camera-shutter" :class="{ 'flash': isShotPhoto }"></div>

                <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>

                <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
              </div>

              <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
                <button type="button" class="button" @click="takePhoto">
                  <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
                </button>
              </div>

              <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
                  Download
                </a>
                <!-- TODO: push photo en back ! -->
              </div>
            </div>
          </button>


        </div>
      </div>
    </div>

  </div>
</template>

<script>

// import axios from 'axios';
import CardCatalogue from '@/components/CardCatalogue.vue'

export default {
  name: "ProfilView",
  components: {
    CardCatalogue
  },
  data() {
    return {
      user: {
        lastname: 'Nom',
        firstname: 'Prenom',
        email: 'votre-email@email.fr',
        type_user: 'Type d\'utilisateur',
        profile_photo: ''
      },
      plantPost: {
        publication_date: '',
        photo: '',
        title: '',
        description: '',
        surname: '',
        city: '',
        address: '',
        post_code: '',
        start_date: '',
        end_date: ''
      },
      plantCatalogue: {
        libelle: '',
        type: '',
        photo: '',
        advice: ''
      },
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
    }
  },
  async mounted() { },
  watch: {},
  methods: {
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },

    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: false,
        video: true
      });


      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.isLoading = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch(error => {
          this.isLoading = false;
          alert("May the browser didn't support or there is some errors.");
          console.log(error)
        });
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
    },

    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },

    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.main {
  background: linear-gradient(to right, rgb(226, 227, 221), rgb(212, 219, 212));
}

.font {
  font-family: 'Dancing Script', cursive;
}

.font-p {
  font-size: x-large;
}

#background {
  width: 100%;
  height: 35%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.master-tuille {
  justify-content: space-evenly;
}

.tuille {
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.tuille-small img {
  max-height: 50%;
  padding: 2%;
}

.tuille-small {
  background-color: blanchedalmond;
}

.tuille-meduim {
  background-color: cadetblue;
  padding: 3%;
  height: fit-content;
}

.tuille-plant {
  max-height: 20%;
  max-width: 15%;
  background-color: rgb(246, 246, 248);
}

.tuille-plant img {
  padding: 20%;
}
</style>
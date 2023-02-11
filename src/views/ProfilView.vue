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
                <img :src=user.profile_photo alt="Example image 1" class="h-56 w-80 object-cover" />
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <br>
                <p class="text-gray-600 text-base font-p font">{{ user.lastname }}</p>
                <p class="text-gray-600 text-base font-p font">{{ user.firstname }}</p>
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
          <div v-for="plantPost in plantPosts" v-bind:key="plantPost.id">
            <CardCatalogue :plantPost="plantPost" />
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg" type="add">
            <img v-if="disableImg === false" src="../assets/images/add.png" alt="button ajout" border="0"
              @click="toggleCamera">
            <div id="app" class="">
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
                <button type="button" @click="takePhoto">
                  <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
                </button>
              </div>

              <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                <!--

                  <button type="button" @click="handleImage">
                    <span class="font font-p">Envoyer photo</span>
                  </button>
                -->
                <!-- TODO: push photo en back ! -->

                <Modal>
                  <div class="relative p-6 flex-auto">
                    <p class="my-4 text-slate-500 text-lg leading-relaxed">
                      Afin de procéder à l'enregistrement de votre demande de gardiennage de plante, merci de remplir
                      les informations ci-dessous.
                    </p>
                    <form class="space-y-6" action="#">
                      <div>
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Titre de l'annonce</label>
                        <input type="title" name="title" id="title" v-model="plantPosts.title"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required>
                      </div>
                      <div>
                        <label for="description"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description de
                          l'annonce</label>
                        <input type="description" name="description" id="description" v-model="plantPosts.description"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required>
                      </div>
                      <div>
                        <label for="surname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Le
                          petit nom
                          de votre plante</label>
                        <input type="surname" name="surname" id="surname" v-model="plantPosts.surname"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required>
                      </div>
                      <div>
                        <label for="adress"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse</label>
                        <input type="adress" name="adress" id="adress" v-model="plantPosts.adress"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required>
                      </div>
                      <div>
                        <label for="post_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code
                          Postal</label>
                        <input type="post_code" name="post_code" id="post_code" v-model="plantPosts.post_code"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required>
                      </div>
                      <div>
                        <label for="city"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ville</label>
                        <input type="city" name="city" id="city" v-model="plantPosts.city"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required>
                      </div>
                      <div>
                        <label for="start_date"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de
                          début du gardiennage</label>
                        <input type="start_date" name="start_date" id="start_date" v-model="plantPosts.start_date"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required>
                      </div>
                      <div>
                        <label for="end_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date
                          de fin
                          du gardiennage</label>
                        <input type="end_date" name="end_date" id="end_date" v-model="plantPosts.end_date"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required>
                      </div>
                    </form>
                  </div>

                  <!--footer-->
                  <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button" @click="handleNewPlant">
                      Save Changes
                    </button>
                    <button
                      class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button" @click="toggleModal()">
                      Close
                    </button>
                  </div>
                </Modal>



              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

  </div>
</template>

<script>

import axios from 'axios';
import CardCatalogue from '../components/CardCatalogue.vue';
import Modal from '../components/CardModal.vue'
import photoProfil from '../assets/images/plante3.jpg'
const url = 'http://localhost:8080/api/'

export default {
  name: "ProfilView",
  components: {
    CardCatalogue,
    Modal
  },
  data() {
    return {
      user: {
        lastname: 'Lucky',
        firstname: 'Luc',
        email: 'LuckyLucky@wanadoo.fr',
        type_user: 'utilisateur',
        profile_photo: photoProfil,
      },

      plantPosts: [{
        id: 1,
        publication_date: '',
        photo: '',
        title: 'une tulipe',
        description: 'a très soif',
        surname: 'lili',
        city: '',
        address: '',
        post_code: '',
        start_date: '',
        end_date: ''
      }],
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      disableImg: false,
      imageStandby: '',
    }
  },
  async mounted() {
    // TODO: enlever commenter lorsque méthode ok
    // this.getUser();
  },
  watch: {},
  methods: {
    async getUser(id) {
      try {
        const user = await axios.get(url + `user/${id}`,
          {
            headers: { "Access-Control-Allow-Origin": "*" }
          });
        this.plantPosts = user.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getPlantPosts() {
      try {
        const posts = await axios.get(url + "planPosts",
          {
            headers: { "Access-Control-Allow-Origin": "*" }
          });
        this.plantPosts = posts.data;
      } catch (error) {
        console.log(error);
      }
    },
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.disableImg = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.disableImg = true;
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

    // TODO: faire méthode pour récupérer la photo et l'envoyer au back
    handleImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
      this.createBase64Image(canvas);
    },
    createBase64Image(file) {
      const read = new FileReader();
      read.onload = (e) => {
        this.imageStandby = e.target.result;
      };
      read.readAsBinaryString(file);
      this.handleModal();
    },
    async handleNewPlant() {
      try {
        this.plantPosts.photo = this.imageStandby;
        await axios.post(url + '1/plantPost', this.plantPosts);
      } catch (error) {
        console.log(error)
      }
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

body {
  display: flex;
  justify-content: center;
}

.camera-button.web-camera-container {
  margin-bottom: 2rem;
}

.camera-shutter.camera-box.web-camera-container {
  opacity: 0;
  width: 450px;
  height: 337.5px;
  background-color: #fff;
  position: absolute;


}

.flash.camera-shutter.camera-box.web-camera-container {
  opacity: 1;
}

.camera-shoot.web-camera-container {
  margin: 1rem 0;
}

button.camera-shoot.web-camera-container {
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}

img.camera-shoot.web-camera-container {
  height: 35px;
  object-fit: cover;
}

.camera-loading.web-camera-container {
  overflow: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
  min-height: 150px;
  margin: 3rem 0 0 -1.2rem;


}

ul.camera-loading.web-camera-container {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 999999;
  margin: 0;
}

.loader-circle.camera-loading.web-camera-container {
  display: block;
  height: 14px;
  margin: 0 auto;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  position: absolute;
  width: 100%;
  padding: 0;


}

li.loader-circle.camera-loading.web-camera-container {
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  line-height: 10px;
  padding: 0;
  position: relative;
  margin: 0 0 0 4px;
  background: #999;
  animation: preload 1s infinite;
  top: -50%;
  border-radius: 100%;


}

:nth-child(2).loader-circle.camera-loading {
  animation-delay: .2s;
}

:nth-child(3).loader-circle.camera-loading {
  animation-delay: .4s;
}

@keyframes preload {
  0% {
    opacity: 1
  }

  50% {
    opacity: .4
  }

  100% {
    opacity: 1
  }

}
</style>
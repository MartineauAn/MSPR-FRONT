<template>
  <div class="main ">
    <div class="bg-cover bg-center h-96 shadow-lg">
      <div class="grid auto-rows-max">
        <div class="bg-cover bg-center h-96 shadow-lg">
          <img src="@/assets/images/fond-profil.jpg" class="object-cover h-full w-full" />
        </div>

        <div class="grid gap-6 hover:cols-1 absolute">
          <div class="container mx-auto">
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <img :src=profile_photo alt="Example image 1" class="h-56 w-80 object-cover" />
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
              <!-- camera !! -->
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


              <!-- Modal !! -->
              <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                <!-- TODO: push photo en back ! -->

                <Modal :value="isModalVisible === true">
                  <div class="relative p-6 flex-auto">
                    <p class="my-4 text-slate-500 text-lg leading-relaxed">
                      Afin de procéder à l'enregistrement de votre demande de gardiennage de plante, merci de remplir
                      les informations ci-dessous.
                    </p>
                    <form class="space-y-6" action="#">
                      <div class="grid grid-cols-2 gap-6">

                        <div>
                          <label for="title" class="block mb-2 text-sm font-medium text-gray-900">
                            Titre de l'annonce</label>
                          <input type="title" name="title" id="title" v-model="plantPost.title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                        </div>
                        <div>
                          <label for="description" class="block mb-2 text-sm font-medium text-gray-900">
                            Description de l'annonce
                          </label>
                          <input type="description" name="description" id="description" v-model="plantPost.description"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                        </div>
                        <div>
                          <label for="surname" class="block mb-2 text-sm font-medium text-gray-900">
                            Le petit nom de votre plante
                          </label>
                          <input type="surname" name="surname" id="surname" v-model="plantPost.surname"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                        </div>
                        <div>
                          <label for="adress"
                            class="block mb-2 text-sm font-medium text-gray-900">Adresse</label>
                          <input type="adress" name="adress" id="adress" v-model="plantPost.adress"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                        </div>
                        <div>
                          <label for="post_code"
                            class="block mb-2 text-sm font-medium text-gray-900">Code
                            Postal</label>
                          <input type="post_code" name="post_code" id="post_code" v-model="plantPost.post_code"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                        </div>
                        <div>
                          <label for="city"
                            class="block mb-2 text-sm font-medium text-gray-900">Ville</label>
                          <input type="city" name="city" id="city" v-model="plantPosts.city"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                        </div>
                        <div>
                          <label for="start_date"
                            class="block mb-2 text-sm font-medium text-gray-900">Date de début du
                            gardiennage</label>
                          <input type="start_date" name="start_date" id="start_date" v-model="plantPost.start_date"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                        </div>
                        <div>
                          <label for="end_date" class="block mb-2 text-sm font-medium text-gray-900">
                            Date de fin du gardiennage</label>
                          <input type="end_date" name="end_date" id="end_date" v-model="plantPost.end_date"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                        </div>
                      </div>
                    </form>
                  </div>

                  <!--footer-->
                  <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      class="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button" @click="handleNewPlant">
                      Save Changes
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

import axios from 'axios'
import CardCatalogue from '../components/CardCatalogue.vue'
import Modal from '../components/CardModal.vue'
import photoProfil from '../assets/images/plante3.jpg'

export default {
  name: "ProfilView",
  components: {
    CardCatalogue,
    Modal
  },
  data() {
    return {
      user: null,
      plantPosts: [],
      profile_photo: photoProfil,
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      disableImg: false,
      imageStandby: '',
      isModalVisible: false,
      plantPost: {
        start_date: null,
        end_date: null,
        title: null,
        description: null,
        surname: null,
        post_code: null,
        adress: null,
        city: null,
      }
    }
  },
  created () {
    // TODO: enlever commenter lorsque méthode ok
    this.getUser();
    this.getPlantPosts()
  },
  watch: {},
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async getUser() {
      try {
        const user = await axios.get(`users/${this.$route.params.id}`, this.axios_config);

        this.user = (await user).data;


      } catch (error) {
        console.log('erreur dans get user' + error);
      }
    },
    // TODO: vérifier appel fonctionne ! pour getUser et getPlantPosts
    async getPlantPosts() {
      try {
        const posts = await axios.get(`users/${this.$route.params.id}/plantPosts`, this.axios_config);
        console.log(posts)
        this.plantPosts = (await posts).data._embedded.plantPosts;
      } catch (error) {
        console.log('erreur dans getPlantPosts' + error);
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

    handleImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg");
      download.setAttribute("href", canvas);
      this.createBase64Image(canvas);
    },
    createBase64Image(file) {
      const read = new FileReader();
      read.onload = (e) => {
        this.imageStandby = e.target.result;
      };
      read.readAsBinaryString(file);
    },
    async handleNewPlant() {

      var form = new FormData();

      var canvas = document.getElementById("photoTaken");

      canvas.toBlob(async blob => {
        const file = new File([blob], "image.png")
        form.append("start_date",this.plantPost.start_date);
        form.append("end_date",this.plantPost.end_date);
        form.append("title",this.plantPost.title);
        form.append("description",this.plantPost.description);
        form.append("surname",this.plantPost.surname);
        form.append("city",this.plantPost.city);
        form.append("address",this.plantPost.adress);
        form.append("post_code",this.plantPost.post_code);
        form.append("photo",file,"image.jpeg");
        form.append("plant_id",1);
        
        console.log(form);
        try {
          await axios.post("1/plantPost", form , this.axios_config);
        } catch (error) {
          console.log(error)
        }
      })
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
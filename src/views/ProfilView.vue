<template>
  <div class="main ">
    <!-- grid rows 2 permet de séparer la page en deux en largueur -->
    <div class="grid auto-rows-max">
      <!-- cols pour séparer dans la longuer et relative sinon les tuilles ne vont pas sur l'image -->
      <div class="grid auto-rows-max relative">
        <img id="background" class="background" src="../assets/fond-profil.jpg" alt="fond d'écran">

        <div class="master-tuille grid grid-cols-2 gap-4 hover:cols-1 absolute">
          <img class="tuille-small tuille row-span-2" alt="Vue logo" src="../assets/logo.png" />

          <div class="tuille-meduim tuille row-span-3">
            <p>{{ user.firstname }}</p>
            <p>{{ user.lastname }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.type_user }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- deuxième parti de l'écran -->
    <div class="">
      <h2>Mes plantes à garder</h2>
      <div class="tuille-plant tuille">
        <button type="add" @click="addPlant">
          <img src="../assets/add.png" alt="button ajout" border="0">
        </button>

      </div>
    </div>
  </div>
</template>

<script>

// import axios from 'axios';

export default {
  name: "ProfilView",
  components: {},
  data() {
    return {
      user: {
        lastname: 'Serra',
        firstname: 'Alison',
        email: 'blabla@email.fr',
        type_user: 'Botaniste',
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
      }
    }
  },
  async mounted() { },
  watch: {},
  methods: {
    fetchData: async function () {
      const user = this.user;

      return user;
    },
    async addPlant() {
      console.log("appuie sur boutton ajout plante")
    },
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.main {
  background-color: rgb(220, 224, 219);
}

h2 {
  font-family: 'Dancing Script', cursive;
  font-size: xx-large;
  font-weight: 500;
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
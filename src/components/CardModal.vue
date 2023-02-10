<template>
  <div>
    <button
      class="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button" v-on:click="toggleModal()">
      Envoyer photo
    </button>
    <div v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <!-- TODO essayer de centrer le texte -->
            <p class="text-center text-3xl font-semibold">
              Informations complémentaire
            </p>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->



          <div class="relative p-6 flex-auto">
            <p class="my-4 text-slate-500 text-lg leading-relaxed">
              Afin de procéder à l'enregistrement de votre demande de gardiennage de plante, merci de remplir les
              informations ci-dessous.
            </p>
            <form class="space-y-6" action="#">
              <div>
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre de
                  l'annonce</label>
                <input type="title" name="title" id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required>
              </div>
              <div>
                <label for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description de l'annonce</label>
                <input type="description" name="description" id="description"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required>
              </div>
              <div>
                <label for="surname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Le petit nom
                  de votre plante</label>
                <input type="surname" name="surname" id="surname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required>
              </div>
              <div>
                <label for="adress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse</label>
                <input type="adress" name="adress" id="adress"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required>
              </div>
              <div>
                <label for="post_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code
                  Postal</label>
                <input type="post_code" name="post_code" id="post_code"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required>
              </div>
              <div>
                <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ville</label>
                <input type="city" name="city" id="city"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required>
              </div>
              <div>
                <label for="start_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de
                  début du gardiennage</label>
                <input type="start_date" name="start_date" id="start_date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required>
              </div>
              <div>
                <label for="end_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de fin
                  du gardiennage</label>
                <input type="end_date" name="end_date" id="end_date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required>
              </div>
            </form>
          </div>

          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button
              class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" v-on:click="toggleModal()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<!--
plantPost

  id
  publication_date
  photo
  title
  description
  surname
  city
  adress
  post_code
  start_date
  end_date
  idPhoto
  idPlant
  idUser
-->

<script>
export default {
  name: "large-modal",
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    }
  }
}
</script>
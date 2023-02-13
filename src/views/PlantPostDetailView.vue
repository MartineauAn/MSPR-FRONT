<template>
  <div
    style="
      background: linear-gradient(
        to right,
        rgb(226, 227, 221),
        rgb(212, 219, 212)
      );
    "
    class="h-screen"
  >
    <div
      class="
        flex
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-2
        gap-x-48 gap-y-12
      "
    >
      <div class="flex col-span-1 justify-end items-end content-end mt-6">
        <div class="bg-white p-6 rounded-xl shadow-lg">
          <img
            src="@/assets/images/plante3.jpg"
            alt="Example image 1"
            class="w-48 h-32 object-cover rounded-lg"
          />
          <div class="pt-6">
            <p class="text-gray-600 text-base">Nom commun</p>
          </div>
        </div>
      </div>
      <div class="flex col-span-1 justify-start items-start content-start mt-6">
        <div
          class="
            col-span-2
            sm:col-span-2
            lg:col-span-2
            flex
            justify-center
            items-center
            content-center
          "
        >
          <div class="bg-white p-6 rounded-xl shadow-lg lg:w-96 lg:h-60">
            <h1 class="text-3xl font-semibold">Adresse</h1>
            <div class="pt-6">
              <p class="text-gray-600 text-base">blablablabla</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          col-span-1
          sm:col-span-1
          lg:col-span-1
          flex
          justify-end
          items-end
          content-end
        "
      >
        <div class="bg-white p-6 rounded-xl shadow-lg lg:w-96 lg:h-60">
          <h1 class="text-3xl font-semibold">Conseil d'entretien</h1>
          <button
            class="text-white font-bold py-2 px-4 rounded-full mt-4"
            style="
              background-image: linear-gradient(
                to right,
                rgb(226, 227, 221),
                rgb(212, 219, 212)
              );
            "
            @click="openModal"
          >
            Ajouter un conseil
          </button>
          <CardAddAdvice :show="showModal" @close-modal="closeModal">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="message">
                Ajouter un conseil
              </label>
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-xl font-medium text-gray-900"
                  >Titre</label
                >
                <input
                  type="text"
                  id="adviceTitle"
                  class="
                    border border-gray-300
                    shadow
                    appearance-none
                    rounded
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none focus:shadow-outline
                  "
                  placeholder="Titre"
                  required
                  v-model="adviceTitle"
                />
              </div>
              <label
                for="first_name"
                class="block mb-2 text-xl font-medium text-gray-900"
                >Conseil</label
              >
              <textarea
                class="
                  border border-gray-300
                  shadow
                  appearance-none
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="advice"
                v-model="advice"
              >
Conseil</textarea
              >
            </div>
            <div class="flex justify-end">
              <button
                class="text-white font-bold py-2 px-4 rounded mr-2"
                @click="saveMessage"
                style="
                  background-image: linear-gradient(
                    to right,
                    rgb(226, 227, 221),
                    rgb(212, 219, 212)
                  );
                "
              >
                Sauvegarder
              </button>
              <button
                class="
                  bg-gray-500
                  hover:bg-gray-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                "
                @click="closeModal"
              >
                Fermer
              </button>
            </div>
          </CardAddAdvice>
            <div
              v-for="specification in plantPost.specifications"
              :key="specification.id"
              class="flex pt-6"
            >
              <p class="text-gray-600 text-base">{{ specification.title }}</p>

              <p class="text-gray-600 text-base overflow-auto">
                {{ specification.comment }}
              </p>
            </div>
        </div>
      </div>
      <div
        class="
          col-span-1
          sm:col-span-1
          lg:col-span-1
          flex
          justify-start
          items-start
          content-start
        "
      >
        <div class="bg-white p-6 rounded-lg shadow-lg lg:w-96 lg:h-60">
          <h1 class="text-3xl font-semibold">Description</h1>
          <div class="pt-6">
            <p class="text-gray-600 text-base">{{ plantPost.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardAddAdvice from "@/components/CardAddAdvice.vue";
import axios from "axios";
export default {
  components: {
    CardAddAdvice,
  },
  data() {
    return {
      showModal: false,
      advice: "",
      adviceTitle: "",
      plantPost: [],
    };
  },
  created: function () {
    this.fetchPlantPost();
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.advice = "";
      this.adviceTitle = "";
    },
    saveMessage() {
      // Do something with the message data
      console.log(this.advice);
      axios
        .post(
          "planPosts/1/specification",
          {
            title: this.adviceTitle,
            content: this.advice,
          },
          this.axios_config
        )

        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.closeModal();
    },

    fetchPlantPost: async function () {
      try {
        const response = await axios.get(
          "planPosts/" + this.$route.params.id,
          this.axios_config
        );
        this.plantPost = response.data;
        console.log(this.plantPost);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- address
: 
"aaaaaaaaaaaaaa"
city
: 
"aaaaa"
description
: 
"1vsd s sf "
end_date
: 
"2021-06-02T21:33:45.249967"
id
: 
1
photo
: 
{fileName: '1666299726.jpeg', mimeType: 'image/jpeg', size: 395659, id: 'edf279a6-a4d4-466c-a7b4-97d7b7315aba'}
photo_id
: 
"edf279a6-a4d4-466c-a7b4-97d7b7315aba"
post_code
: 
"aaaaa"
publicationDate
: 
"2023-02-13T14:31:42.960+00:00"
specifications
: 
[]
start_date
: 
"2021-06-02T21:33:45.249967"
surname
: 
"aaa"
title
: 
"aaaaaaaaaaaaaaa" -->
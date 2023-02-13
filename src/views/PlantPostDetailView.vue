<template>
      <div 
    style="
      background: linear-gradient(
        to right,
        rgb(226, 227, 221),
        rgb(212, 219, 212)
      );" class="h-full">
      
    <div
      class="
        flex
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-2
        gap-y-10
        sm:gap-x-48 sm:gap-y-12
        lg:gap-x-48 lg:gap-y-12
      "
    >
      <div class="flex col-span-1 justify-center lg:justify-end sm:justify-end mt-6 ">
        <div class="bg-white p-6 rounded-xl shadow-lg">
          <img
            :src="photo "
            alt=""
            class="w-48 h-32 object-cover rounded-lg"
          />
          <div class="pt-6">
            <p class="text-gray-600 text-base">{{ plantPost.title }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex col-span-1 justify-center lg:justify-start sm:justify-start"
      >
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
          <div
            class="
              bg-white
              rounded-xl
              shadow-lg
              w-52
              h-40
              sm:w-72 sm:h-56
              lg:w-72 lg:h-56
              mt-6
            "
          >
            <h1 class="text-3xl font-semibold">Adresse</h1>
            <div class="pt-6">
              <p class="text-gray-600 text-base">
                {{ plantPost.address }} , <br />{{ plantPost.city }} , <br />{{
                  plantPost.post_code
                }}
              </p>
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
          justify-center
          lg:justify-end
          sm:justify-end
        "
      >
        <div
          class="
            bg-white
            p-6
            rounded-xl
            shadow-lg
            w-72
            h-56
            sm:w-72 sm:h-56
            lg:w-72 lg:h-56
            overflow-y-auto
          "
        >
          <h1 class="text-3xl font-semibold">Conseil d'entretien</h1>
          <button
            class="text-white font-bold py-2 px-4 rounded-full"
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
            <div class="flex flex-col">
              <h1 class="text-gray-600 text-2xl font-semibold">
                {{ specification.title }}
              </h1>
              <p class="text-gray-600 text-lg w-full">
                {{ specification.comment }}
              </p>
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
          justify-center
          lg:justify-start
          sm:justify-start
        "
      >
        <div
          class="
            bg-white
            p-6
            rounded-xl
            shadow-lg
            w-72
            h-52
            sm:w-72 sm:h-56
            lg:w-72 lg:h-56
            overflow-y-auto
          "
        >
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
      photo: "",

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

      var form = new FormData();

      form.append("title", this.adviceTitle);
      form.append("content", this.advice);

      axios
        .post("planPosts/1/specification", form, this.axios_config)

        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.closeModal();
      this.fetchPlantPost();
    },

    fetchPlantPost: async function () {
      try {
        const response = await axios.get(
          "planPosts/" + this.$route.params.id,
          this.axios_config
        );
        this.plantPost = response.data;
        this.photo = this.imgAuth + "plantPosts/photos/" + this.plantPost.photo_id

      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

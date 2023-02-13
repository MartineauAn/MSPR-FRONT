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
        <div
          class="
            overflow-auto
            bg-white
            p-6
            rounded-xl
            shadow-lg
            lg:w-96 lg:h-60
          "
        >
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
              <textarea
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="message"
                v-model="message"
              ></textarea>
            </div>
            <div class="flex justify-end">
              <button
                class="
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  mr-2
                "
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
          <div class="pt-6">
            <p class="text-gray-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum, diam ac finibus mattis, diam purus pellentesque mi,
              eget mattis velit neque ut quam. Nunc et velit .
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
        <div
          class="
            overflow-auto
            bg-white
            p-6
            rounded-lg
            shadow-lg
            lg:w-96 lg:h-60
          "
        >
          <h1 class="text-3xl font-semibold">Description</h1>
          <div class="pt-6">
            <p class="text-gray-600 text-base">blablablabla</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardAddAdvice from "@/components/CardAddAdvice.vue";
export default {
  components: {
    CardAddAdvice,
  },
  data() {
    return {
      showModal: false,
      message: "",
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.message = "";
    },
    saveMessage() {
      // Do something with the message data
      console.log(this.message);
      this.closeModal();
    },
  },
};
</script>
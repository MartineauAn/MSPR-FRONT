<template>
  <div
    style="
      background: linear-gradient(
        to right,
        rgb(226, 227, 221),
        rgb(212, 219, 212)
      );
    "
  >
    <div class="bg-cover bg-center h-96 shadow-lg">
      <h1
        class="
          absolute
          text-6xl text-black
          top-36
          left-1/2
          -translate-x-1/2 -translate-y-1/2">
        APlanter
      </h1>
      <img
        src="@/assets/images/plante1.jpg"
        class="object-cover h-full w-full"
      />
    </div>
    <div class="container mx-auto shadow-lg" style="background-color: #f6f6f8">
      <div class="grid grid-cols-2">
        <div class="flex justify-center items-center content-center ml-6 mr-6">
          <div>
            <h3 class="text-3xl font-semibold">A propos de nous</h3>
            <p class="text-2xl font-medium">
              Nous sommes “A’rosa-je” nous aidons les particuliers à prendre soin de
              leurs plantes. Fondée en 1984 nous avons tout d’abord été composée
              d’une petite équipe de botanistes dans une seule ville et nous sommes
              maintenant composée de plus de 1500 botanistes répartis sur toute
              la France qui rendent service aux propriétaires de plantes de deux
              façons :<br> - En allant garder leurs plantes lorsque les
              propriétaires sont absents <br> - En prodiguant des conseils
              d’entretien afin que les propriétaires s’occupent de mieux en
              mieux de leurs plantes.
            </p>
          </div>
        </div>
        <div>
          <img
            src="@/assets/images/plante2.jpg"
            alt=""
            class="w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>

    <div class="container mx-auto py-2 px-6 shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Catalogue de plantes</h2>
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3 lg:px-44 lg:gap-x-24 lg:gap-y-10
          gap-6
        "
      >
        <div v-for="plantPost in plantPosts" v-bind:key="plantPost.id">
          <router-link :to='"/plant/" + plantPost.id + "/detail"' custom v-slot="{ navigate }">
            <CardCatalogue :plantPost="plantPost" @click="navigate" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCatalogue from "@/components/CardCatalogue.vue";
import axios from "axios";
// /api/planPosts
export default {
  components: {
    CardCatalogue,
  },
  created: function () {
    this.fetchPlantPosts();
  },
  data() {
    return {
      plantPosts: [],
    };
  },
  methods: {
    fetchPlantPosts: async function () {
      try {
        const response = await axios.get("planPosts",this.axios_config);
        this.plantPosts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

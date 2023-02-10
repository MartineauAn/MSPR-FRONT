<template>
  <div
    style=" background: linear-gradient(
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
          -translate-x-1/2 -translate-y-1/2
        "
      >
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
            <h3 class="text-2xl font-semibold">About us</h3>
            <p class="text-xl font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit
              dolor, sagittis eu libero vitae, scelerisque accumsan libero.
              Morbi ultricies eleifend lorem eu porta. Nullam tincidunt
              tincidunt magna, vitae lobortis turpis vestibulum in. Quisque
              pharetra luctus luctus. Sed euismod erat tellus, non dapibus nunc
              posuere sodales. Aenean ut dapibus neque. Cras in libero vitae
              mauris convallis feugiat. Etiam imperdiet rutrum nisi, blandit
              vehicula dolor convallis nec. In at volutpat erat. Etiam luctus
              urna eget leo condimentum malesuada. Aenean hendrerit augue ut
              pretium ultricies.
            </p>
          </div>
        </div>
        <div>
          <img
            src="@/assets/images/plante2.jpg"
            alt="Example image 1"
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
        <CardCatalogue :plantPost="plantPost" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCatalogue from "@/components/CardCatalogue.vue";

export default {
  components: {
    CardCatalogue,
  },
  data(){
    return {
      plantPosts: [
        {
          id:1,publication_date:'', photo:'', title:'', description:'Ouais', surname:'', city:'', address:'', post_code:'', start_date:'', end_date:''
        },
        {
          id:2,publication_date:'', photo:'', title:'', description:'Ouais', surname:'', city:'', address:'', post_code:'', start_date:'', end_date:''
      }
      ]
    }
  }
};
</script>

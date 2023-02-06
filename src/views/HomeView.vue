<template>
<div style="background : linear-gradient(to right, rgb(226, 227, 221), rgb(212,219,212))">
  <div class="bg-cover bg-center h-96 shadow-lg">
    <h1
      class="
        absolute
        text-5xl text-black
        top-1/3
        left-1/2
        -translate-x-1/2 -translate-y-1/2
      "
    >
      APlanter
    </h1>
    <img src="@/assets/images/plante1.jpg" class="object-cover h-full w-full" />
  </div>
  <div class="container mx-auto shadow-lg" style="background-color: #F6F6F8;">
    <div class="grid grid-cols-2">
      <div class="flex text-2xl justify-center content-center">About us</div>
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-44 lg:gap-x-24 lg:gap-y-10 gap-6">
      <CardCatalogue/>
      <CardCatalogue/>
      <CardCatalogue/>
      <CardCatalogue/>
      <CardCatalogue/>
    </div>
  </div>

</div>
 </template>

<script>
import CardCatalogue from '@/components/CardCatalogue.vue'

export default {
  components: {
    CardCatalogue
  }
}
</script>

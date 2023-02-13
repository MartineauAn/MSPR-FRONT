<template>
  <div class="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 active:scale-95">
    <img
      :src="photo"
      alt="photo"
      class="w-full h-48 object-cover rounded-lg"
    />
    <div class="pt-6">
      <p class="text-gray-600 text-base">
        {{ plantPost.description }}
      </p>
    </div>
  </div>

</template>
<script>
export default {
    props: {
        plantPost: null,
    },
    data(){
      return {
        photo: this.imgAuth + "plantPosts/photos/" + this.plantPost.photo_id
      }
    },
}
</script>

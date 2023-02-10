<template>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <img
      src="@/assets/images/plante3.jpg"
      alt="Example image 1"
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
    }
}
</script>

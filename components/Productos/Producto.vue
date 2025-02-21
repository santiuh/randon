<template>
  <div
    class="flex flex-col shadow-xl rounded-lg overflow-hidden border-[#e4e4e4] bg-white border hover:scale-105 transition-all duration-300"
  >
    <NuxtImg class="w-auto h-auto" :src="'img/Productos/' + img"></NuxtImg>
    <div class="text-xl font-bold p-8 text-black text-center">
      {{ texto }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["img", "texto"]);
</script>

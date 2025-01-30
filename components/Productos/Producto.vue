<template>
  <div
    class="flex flex-col shadow-xl rounded-lg overflow-hidden border-[#e4e4e4] border hover:scale-105 transition-all duration-300"
  >
    <NuxtImg
      class="w-full aspect-square drop-shadow-lg"
      :src="'img/Productos/' + img"
    ></NuxtImg>
    <div class="pb-9 px-9 pt-5 flex flex-col">
      <span class="text-lg font-medium">{{ texto }}</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["img", "texto"]);
</script>

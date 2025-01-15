<template>
  <div class="flex flex-col shadow-xl rounded-lg overflow-hidden">
    <NuxtImg
      class="w-full aspect-square"
      :src="'img/Productos/' + img"
    ></NuxtImg>
    <div class="pb-9 pl-9 pt-5 flex flex-col">
      <span class="text-lg font-medium">Nombre</span>
      <span class="text-2xl font-bold">Producto</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["img"]);
</script>

<template>
  <div
    class="bg-[url('/img/Rodagray.png')] bg-center bg-cover flex flex-row text-white rounded-3xl px-20 p-9 justify-between w-fit gap-36 self-center absolute bottom-[-75px]"
  >
    <div class="flex flex-col gap-3">
      <p class="font-extrabold text-5xl">¿Querés renovar tu stock?</p>
      <p class="text-3xl font-medium">Pedí nuestro catálogo por Whatsapp.</p>
    </div>
    <button
      class="flex flex-row bg-primary pl-5 pr-8 py-3 rounded-2xl align-middle items-center gap-3 hover:scale-105 hover:!bg-[#222664] transition-all duration-150"
      @click="openWindow()"
    >
      <NuxtImg class="h-14 w-14" src="svg/wspgreen.svg"></NuxtImg>
      <span class="text-3xl text-nowrap">Hace click acá</span>
    </button>
  </div>
</template>
<script setup lang="ts">
const openWindow = () => {
  window.open("https://api.whatsapp.com/send?phone=5493415709283", "_blank");
};
</script>

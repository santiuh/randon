<template>
  <div class="fixed bottom-7 right-7 z-50">
    <a
      :href="whatsappLink"
      target="_blank"
      class="rounded-full overflow-hidden shadow-lg hover:bg-green-600 transition flex items-center justify-center"
    >
      <NuxtImg class="h-14 w-14" src="svg/wspgreen.svg"></NuxtImg>
    </a>
  </div>
</template>

<script setup>
const phoneNumber = "5493417484539"; // Reemplaza con tu número de WhatsApp
const message = "Hola, me gustaría más información"; // Mensaje opcional
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;
</script>

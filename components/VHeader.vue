<template>
  <div class="flex w-full justify-center bg-primary text-white pt-9 pb-8">
    <div
      class="max-w-[1400px] flex flex-row justify-between w-full items-center px-32"
    >
      <svgo-logo class="!h-12 !w-auto"></svgo-logo>
      <div class="flex flex-row font-bold text-xl gap-3">
        <NuxtLink to="/">INICIO</NuxtLink>
        <NuxtLink to="/productos">PRODUCTOS</NuxtLink>
        <NuxtLink to="/empresa">EMPRESA</NuxtLink>
        <NuxtLink to="/">NOVEDADES</NuxtLink>
        <NuxtLink to="/contacto">CONTACTO</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup></script>

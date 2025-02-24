<template>
  <div class="hidden lg:flex relative w-full">
    <NuxtImg class="w-full" src="/img/conoce.png"></NuxtImg>
    <div class="absolute top-[10%] w-full flex justify-center">
      <VButton
        @click="router.push('/productos')"
        titulo="CONOCÉ NUESTROS PRODUCTOS"
      ></VButton>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
</script>

<template>
  <div
    class="flex lg:hidden relative w-full h-[50vh] bg-[url('/img/conoce.png')] bg-cover bg-center bg-no-repeat px-4"
  >
    <VButton
      @click="router.push('/productos')"
      class="!text-base !items-center mt-12"
      titulo="CONOCÉ NUESTROS PRODUCTOS"
    ></VButton>
  </div>
</template>
<script setup>
const router = useRouter();
</script>

<template>
  <div class="flex w-full relative">
    <NuxtImg
      src="/svg/bgsec2.svg"
      class="hidden xl:flex !w-full !h-auto"
    ></NuxtImg>
    <div
      class="flex xl:hidden bg-[url('/img/bgsec2.png')] bg-cover bg-center bg-no-repeat h-[70vh] w-full"
    ></div>
    <div class="absolute flex flex-col w-full h-full">
      <div
        class="h-full xl:h-1/2 flex flex-col xl:max-w-[1440px] px-4 xl:px-0 self-center w-full justify-end gap-10 xl:gap-2"
        data-aos="slide-right"
        data-aos-once="true"
      >
        <div class="flex flex-col text-3xl xl:text-4xl font-black text-black">
          <span class="[text-shadow:_0_5px_7px_rgb(0_0_0_/_35%)]"
            >¿BUSCÁS UN</span
          >
          <span class="[text-shadow:_0_5px_7px_rgb(0_0_0_/_35%)]"
            >CONCESIONARIO?</span
          >
        </div>
        <VButton titulo="ENCONTRÁ UNO CERCA TUYO"></VButton>
      </div>
      <div class="h-1/2"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
</script>

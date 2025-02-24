<template>
  <div class="w-full bg-gray flex flex-col">
    <div
      class="flex flex-col xl:max-w-[1440px] w-full self-center xl:px-32 px-4 pb-32"
    >
      <div class="flex flex-col text-center pb-16 pt-32 xl:py-16">
        <h1
          class="text-2xl text-secondary font-medium tracking-widest leading-6"
          data-aos="fade-up"
          data-aos-once="true"
        >
          NOVEDADES
        </h1>
        <h2
          class="text-3xl xl:text-[54px] font-bold text-black leading-tight"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="400"
        >
          Enterate de lo último
        </h2>
      </div>
      <div
        class="bg-white grid grid-flow-row grid-cols-1 xl:grid-cols-3 rounded-[38px] px-4 xl:px-16 gap-x-5 gap-y-6 py-20 drop-shadow-2xl"
      >
        <div v-for="i in 6" class="aspect-square w-full flex bg-black"></div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

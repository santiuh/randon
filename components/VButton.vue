<template>
  <button
    class="text-base shadow-2xl drop-shadow-2xl h-fit justify-center lg:justify-start lg:text-3xl flex flex-row items-center lg:items-baseline gap-3 bg-tertiary px-5  rounded-xl py-4 w-full lg:w-fit hover:scale-105 brig transition-all"
  >
    <p>{{ titulo }}</p>
    <svg
      class="w-2 h-auto xl:h-[19px] xl:w-[10px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10.019 19.344"
    >
      <path
        id="Trazado_179"
        data-name="Trazado 179"
        d="M392.5,2211.746l8.286,9.115-8.286,9.115"
        transform="translate(-391.889 -2211.189)"
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="1.657"
      />
    </svg>
  </button>
</template>
<script setup>
const props = defineProps(["titulo"]);
</script>

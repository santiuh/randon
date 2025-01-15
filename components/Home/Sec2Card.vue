<template>
  <div
    class="h-[657px] w-full px-9 bg-cover rounded-3xl pb-16 gap-9 flex flex-col justify-end hover:shadow-xl shadow-2xl hover:cursor-pointer hover:scale-105 duration-300 transition-all"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <div class="flex flex-col text-white">
      <p class="font-medium text-2xl">Línea</p>
      <p class="font-bold text-4xl">{{ title }}</p>
    </div>
    <button
      class="text-3xl flex flex-row items-center gap-3 bg-tertiary px-5 rounded-xl py-4 w-fit hover:scale-105 brig transition-all"
    >
      <p>Ver Productos</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10.019"
        height="19.344"
        viewBox="0 0 10.019 19.344"
      >
        <path
          id="Trazado_179"
          data-name="Trazado 179"
          d="M392.5,2211.746l8.286,9.115-8.286,9.115"
          transform="translate(-391.889 -2211.189)"
          fill="none"
          stroke="#1c2646"
          stroke-miterlimit="10"
          stroke-width="1.657"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["title", "bg"]);
</script>

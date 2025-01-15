<template>
  <div
    class="flex flex-col bg-primary"
    :class="isHome ? '!bg-transparent' : ''"
  >
    <div
      class="flex flex-row justify-between py-10 px-10 self-center w-full max-w-[1440px]"
    >
      <NuxtImg
        @click="router.push('/')"
        class="!h-12"
        :src="isHome ? 'svg/logocolor.svg' : 'svg/logo.svg'"
      ></NuxtImg>
      <div class="flex flex-row">
        <div
          class="font-medium text-lg gap-16 text-white flex flex-row"
          :class="isHome ? '!text-primary' : ''"
        >
          <button @click="goTo('/Marcas')">MARCAS</button>
          <button @click="goTo('/Productos')">PRODUCTOS</button>
          <button @click="goTo('/Empresa')">EMPRESA</button>
          <button @click="goTo('/Clientes')">ACCESO CLIENTES</button>
        </div>
        <div class="flex flex-row gap-3 border-l px-5 ml-5">
          <NuxtImg src="/svg/ig.svg" class="text-white"></NuxtImg>
          <NuxtImg src="/svg/fb.svg"></NuxtImg>
          <NuxtImg src="/svg/li.svg"></NuxtImg>
        </div>
      </div>
    </div>
    <div
      v-if="!isHome"
      :style="{
        backgroundImage: `url('/img/${banner}.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class="flex justify-center"
    >
      <div
        class="text-4xl py-24 flex flex-col text-white text-center"
        v-if="route.path?.includes('Productos')"
      >
        <h1 class="font-extrabold text-4xl relative">
          {{
            route.path === "/Productos"
              ? "Automotor"
              : route.path.includes("Agricola")
              ? "Agrícola"
              : "Industrial"
          }}
          <p class="font-medium text-lg absolute bottom-9 w-full">
            Línea de productos
          </p>
        </h1>
      </div>
      <h1 v-else class="font-extrabold text-4xl py-24 flex text-white">
        {{ banner }}
      </h1>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const isHome = computed(() => {
  return route.path === "/";
});

const banner = computed(() => {
  const path = route.path.split("/").filter(Boolean).pop();
  return path || "default";
});

const goTo = (ruta) => {
  if (ruta === "/Clientes") {
    window.open("https://catalogo.rodaservice.com.ar/", "_blank");
  } else router.push(ruta);
};
</script>

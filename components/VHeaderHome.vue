<template>
  <div class="flex flex-col">
    <div
      class="text-primary flex flex-row justify-between py-10 px-10 items-center"
    >
      <NuxtImg
        @click="router.push('/')"
        class="h-24"
        src="svg/logocolor.svg"
      ></NuxtImg>
      <div class="flex flex-row">
        <div class="font-medium text-lg gap-16 flex flex-row">
          <button @click="goTo('/Marcas')">MARCAS</button>
          <button @click="goTo('/Productos')">PRODUCTOS</button>
          <button @click="goTo('/Empresa')">EMPRESA</button>
          <button @click="goTo('/Clientes')">ACCESO CLIENTES</button>
        </div>
        <div class="flex flex-row gap-3 border-l border-primary px-5 ml-5">
          <NuxtImg class="!text-primary" src="/svg/ig2.svg"></NuxtImg>
          <NuxtImg src="/svg/fb2.svg"></NuxtImg>
          <NuxtImg src="/svg/li2.svg"></NuxtImg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const goTo = (ruta) => {
  if (ruta === "/Clientes") {
    window.open("https://catalogo.rodaservice.com.ar/", "_blank");
  } else router.push(ruta);
};
</script>

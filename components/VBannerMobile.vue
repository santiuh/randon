<template>
  <div
    v-if="!isHome"
    :style="{
      backgroundImage: `url('/img/${banner}.png')`,
    }"
    class="flex lg:hidden justify-center bg-cover bg-center bg-no-repeat"
  >
    <div
      class="text-4xl flex flex-col text-white text-center pt-24 pb-8"
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
          Línea&nbsp;de&nbsp;productos
        </p>
      </h1>
    </div>
    <h1 v-else class="font-extrabold text-3xl lg:text-4xl pt-24 pb-10 flex text-white">
      {{ banner }}
    </h1>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";

const router = useRouter();
const route = useRoute();

const isHome = computed(() => {
  return route.path === "/";
});

const banner = computed(() => {
  const path = route.path.split("/").filter(Boolean).pop();
  return path || "default";
});

// Estado para controlar el fondo cuando se hace scroll
const isScrolled = ref(false);

// Función que maneja el evento de scroll
const handleScroll = () => {
  if (window.scrollY > 100) {
    // Cambiar '100' por la distancia que prefieras
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

// Agregar listener para el evento de scroll
onMounted(() => {
  if (isHome.value) {
    window.addEventListener("scroll", handleScroll);
  }
});

const goTo = (ruta) => {
  if (ruta === "/Clientes") {
    window.open("https://catalogo.rodaservice.com.ar/", "_blank");
  } else router.push(ruta);
};
</script>

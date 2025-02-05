<template>
  <div
    class="w-full flex justify-center xl:pt-[52px] xl:pb-[32px] text-white"
    :class="route.path === '/contacto' ? 'absolute' : 'bg-primary'"
  >
    <nav class="flex flex-col w-full bg-primary xl:hidden fixed z-50">
      <div class="w-full flex flex-row justify-between px-4 py-3">
        <NuxtLink class="items-center flex" to="/">
          <NuxtImg
            :src="
              isScrolled || route.path !== '/'
                ? 'svg/logo.svg'
                : 'svg/logocolor.svg'
            "
            class="self-center transition-all duration-300 h-10"
          ></NuxtImg>
        </NuxtLink>
        <NuxtImg
          @click="menu = !menu"
          class="pt-1"
          src="svg/menu.svg"
        ></NuxtImg>
      </div>
      <div
        :class="menu ? 'h-56' : 'h-0'"
        class="flex flex-col font-semibold text-xl gap-4 pl-8 overflow-hidden transition-all"
      >
        <NuxtLink
          @click="menu = false"
          class="hover:cursor-pointer transition-all duration-300"
          to="/"
        >
          INICIO
        </NuxtLink>
        <NuxtLink
          @click="menu = false"
          class="hover:cursor-pointer transition-all duration-300"
          to="/MARCAS"
        >
          MARCAS
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const route = useRoute();
const menu = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

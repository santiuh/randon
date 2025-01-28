<template>
    <div ref="glideRef2" class="glide">
      <!-- <div
        style="
          background: rgb(255, 255, 255);
          background: linear-gradient(
            270deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 47%,
            rgba(255, 255, 255, 0) 100%
          );
        "
        class="absolute w-40 h-full right-0 z-10"
      ></div>
      <div
        style="
          background: rgb(255, 255, 255);
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 47%,
            rgba(255, 255, 255, 0) 100%
          );
        "
        class="absolute w-40 h-full left-0-0 z-10"
      ></div> -->
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <HomeHero1></HomeHero1>
          </li>
          <li class="glide__slide ">
            <HomeHero2></HomeHero2>
          </li>
          <li class="glide__slide ">
            <HomeHero3></HomeHero3>
          </li>
        </ul>
      </div>
      <div class="glide__bullets z-40" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
       </div>  
    </div>
  </template>
  
  <script setup>
  import Glide from "@glidejs/glide";
  import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

  
  const glideRef2 = ref(null);
  
  onMounted(() => {
    const glideInstance = new Glide(glideRef2.value, {
      type: "carousel",
      perView: 1,
      autoplay: 4000,
    });
    glideInstance.mount();
  });
  </script>

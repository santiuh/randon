<template>
  <div ref="glideRef" class="glide">
    <div class="glide__arrows" data-glide-el="controls">
      <button
        class="glide__arrow glide__arrow--left absolute z-10 h-14 w-14 bg-white flex items-center drop-shadow-2xl ml-8 justify-center rounded-2xl top-24"
        data-glide-dir="<"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.019"
          height="19.344"
          viewBox="0 0 10.019 19.344"
        >
          <g
            id="Grupo_428"
            data-name="Grupo 428"
            transform="translate(-111.495 -2929.686)"
          >
            <path
              id="Trazado_219"
              data-name="Trazado 219"
              d="M120.9,2948.473l-8.286-9.115,8.286-9.115"
              fill="none"
              stroke="#1c2646"
              stroke-miterlimit="10"
              stroke-width="1.657"
            />
          </g>
        </svg>
      </button>
      <button
        class="glide__arrow glide__arrow--right absolute right-0 z-10 h-14 w-14 bg-white flex items-center drop-shadow-2xl mr-8 justify-center rounded-2xl top-24"
        data-glide-dir=">"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.019"
          height="19.344"
          viewBox="0 0 10.019 19.344"
        >
          <g
            id="Grupo_426"
            data-name="Grupo 426"
            transform="translate(-1804.231 -2920.571)"
          >
            <path
              id="Trazado_218"
              data-name="Trazado 218"
              d="M1804.844,2921.128l8.286,9.115-8.286,9.115"
              fill="none"
              stroke="#1c2646"
              stroke-miterlimit="10"
              stroke-width="1.657"
            />
          </g>
        </svg>
      </button>
    </div>
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides !py-11">
        <li class="glide__slide">
          <div
            class="shadow-2xl !h-32 w-72 rounded-lg flex items-center justify-center"
          >
            <NuxtImg src="svg/Sec3_1.svg"></NuxtImg>
          </div>
        </li>
        <li class="glide__slide">
          <div
            class="shadow-2xl !h-32 w-72 rounded-lg flex items-center justify-center"
          >
            <NuxtImg src="svg/Sec3_2.svg"></NuxtImg>
          </div>
        </li>
        <li class="glide__slide">
          <div
            class="shadow-2xl !h-32 w-72 rounded-lg flex items-center justify-center"
          >
            <NuxtImg src="svg/Sec3_3.svg"></NuxtImg>
          </div>
        </li>
        <li class="glide__slide">
          <div
            class="shadow-2xl !h-32 w-72 rounded-lg flex items-center justify-center"
          >
            <NuxtImg src="svg/Sec3_4.svg"></NuxtImg>
          </div>
        </li>
        <li class="glide__slide">
          <div
            class="shadow-2xl !h-32 w-72 rounded-lg flex items-center justify-center"
          >
            <NuxtImg src="svg/Sec3_5.svg"></NuxtImg>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

const glideRef = ref(null);

onMounted(() => {
  const glideInstance = new Glide(glideRef.value, {
    type: "carousel",
    perView: 5,
    gap: 20,
  });
  glideInstance.mount();
});
</script>

<style scoped>
.glide {
  width: 100%;
  height: 400px;
}
.glide__slide {
  padding: 20px;
  text-align: center;
}
</style>

<template>
  <div ref="glideRef" class="glide">
    <div
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
    ></div>
    <div class="glide__arrows" data-glide-el="controls">
      <button
        class="glide__arrow glide__arrow--left !absolute !z-20 !h-14 !w-14 !bg-white !flex !items-center !drop-shadow-2xl !ml-8 !justify-center !rounded-2xl !top-28"
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
        class="glide__arrow glide__arrow--right !absolute !z-20 !h-14 !w-14 !bg-white !flex !items-center !drop-shadow-2xl !ml-8 !justify-center !rounded-2xl !top-28 right-0 mr-8"
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
          <svgo-Sec3_1
            class="!w-56 !h-28 rounded-lg shadow-xl p-3"
          ></svgo-Sec3_1>
        </li>
        <li class="glide__slide">
          <svgo-Sec3_2
            class="!w-56 !h-28 rounded-lg shadow-xl p-3"
          ></svgo-Sec3_2>
        </li>
        <li class="glide__slide">
          <svgo-Sec3_3
            class="!w-56 !h-28 rounded-lg shadow-xl p-3"
          ></svgo-Sec3_3>
        </li>
        <li class="glide__slide">
          <svgo-Sec3_4
            class="!w-56 !h-28 rounded-lg shadow-xl p-3"
          ></svgo-Sec3_4>
        </li>
        <li class="glide__slide">
          <svgo-Sec3_5
            class="!w-56 !h-28 rounded-lg shadow-xl p-3"
          ></svgo-Sec3_5>
        </li>
        <li class="glide__slide">
          <svgo-Sec3_3
            class="!w-56 !h-28 rounded-lg shadow-xl p-3"
          ></svgo-Sec3_3>
        </li>
        <li class="glide__slide">
          <svgo-Sec3_2
            class="!w-56 !h-28 rounded-lg shadow-xl p-3"
          ></svgo-Sec3_2>
        </li>
        <li class="glide__slide">
          <svgo-Sec3_4
            class="!w-56 !h-28 rounded-lg shadow-xl p-3"
          ></svgo-Sec3_4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
const data = ref([""]);
const glideRef = ref(null);

onMounted(() => {
  const glideInstance = new Glide(glideRef.value, {
    type: "carousel",
    perView: 5,
    breakpoints: {
      1280: {
        perView: 1,
      },
    },
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

<template>
  <div ref="glideRef" class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li
          class="glide__slide bg-[url('/svg/Sec3_1.svg')] shadow-2xl bg-no-repeat bg-center bg-contain -36 w-72 rounded-lg"
        >
          Slide 1
        </li>
        <li
          class="glide__slide bg-[url('/svg/Sec3_2.svg')] shadow-2xl bg-no-repeat bg-center bg-contain h-32 w-72 rounded-lg"
        >
          Slide 2
        </li>
        <li
          class="glide__slide bg-[url('/svg/Sec3_3.svg')] shadow-2xl bg-no-repeat bg-center bg-contain h-32 w-72 rounded-lg"
        >
          Slide 3
        </li>
        <li
          class="glide__slide bg-[url('/svg/Sec3_4.svg')] shadow-2xl bg-no-repeat bg-center bg-contain h-32 w-72 rounded-lg"
        >
          Slide 4
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

<template>
  <div
    class="flex w-full relative pt-10"
    :class="par ? 'place-content-end' : 'place-content-start'"
  >
    <div
      data-aos="slide-up"
      class="flex w-1/2 flex-col text-primary gap-6 z-20"
      :class="par ? 'self-start' : 'self-end text-end'"
    >
      <div
        class="border-b-primary relative border-b font-extrabold text-4xl px-11 pb-3"
      >
        {{ datos.year }}
        <span
          :class="par ? '-bottom-4 -left-4' : '-right-4 -bottom-4'"
          class="absolute rounded-full z-10 h-8 w-8 bg-sky-500"
        ></span>
      </div>
      <div
        class="text-4xl px-11 z-0"
        :data-aos="par ? 'slide-left' : 'slide-right'"
      >
        {{ datos.info }}
      </div>
    </div>
    <div
      style="position-area: center"
      class="absolute h-full border-8 bg-primary border-primary flex"
      :class="id === 0 ? 'rounded-t-full' : ''"
    ></div>
  </div>
</template>
<script setup>
const props = defineProps(["id", "datos"]);
const par = computed(() => {
  return props?.id % 2 === 0;
});
</script>

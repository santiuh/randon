<template>
  <div class="flex flex-col">
    <HomeHero></HomeHero>
    <HomeSec1></HomeSec1>
    <HomeSec2></HomeSec2>
    <HomeSec3></HomeSec3>
  </div>
</template>
<script setup>
useHead({
  title: "Randon Argentina | Acoplados y Semirremolques",
  meta: [
    {
      name: "description",
      content:
        "Líderes en acoplados y semirremolques en Argentina. Calidad, innovación y presencia nacional e internacional.",
    },
    {
      property: "og:title",
      content: "Randon Argentina | Acoplados y Semirremolques",
    },
    {
      property: "og:description",
      content:
        "Líderes en acoplados y semirremolques en Argentina. Calidad, innovación y presencia nacional e internacional.",
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/img/home.png" },
  ],
});
</script>

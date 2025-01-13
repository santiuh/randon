<template>
  <div class="flex flex-col bg-tertiary pt-20 pb-44 relative">
    <h1 class="font-extrabold text-5xl text-[#1C2646] text-center">
      Líneas de Productos
    </h1>
    <hr class="w-32 rounded-full border-secondary self-center border-2 my-14" />
    <div class="flex flex-row justify-center gap-5">
      <Sec2Card
        @click="router.push('/Productos')"
        bg="img/Sec2Card1.png"
        title="Automotor"
      ></Sec2Card>
      <Sec2Card
        @click="router.push('/Productos/Agricola')"
        bg="img/Sec2Card2.png"
        title="Implementos Agricolas"
      ></Sec2Card>
      <Sec2Card
        @click="router.push('/Productos/Industrial')"
        bg="img/Sec2Card3.png"
        title="Industrial"
      ></Sec2Card>
    </div>
    <HomeRodaPill></HomeRodaPill>
  </div>
</template>
<script setup lang="ts">
import Sec2Card from "./Sec2Card.vue";
const router = useRouter();
</script>

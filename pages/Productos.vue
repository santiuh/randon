<template>
  <div class="flex flex-col">
    <div class="flex place-content-center bg-tertiary">
      <div class="flex flex-row justify-around py-16 max-w-[1440px] w-full">
        <div class="flex flex-col gap-2 text-[#1C2646]">
          <button @click="router.push('/Productos')" class="font-bold text-3xl">
            Linea Automotor
          </button>
          <hr
            v-if="route.path === '/Productos'"
            class="w-32 rounded-full border-secondary self-center border-2"
          />
        </div>
        <div class="flex flex-col gap-2 text-[#1C2646]">
          <button
            @click="router.push('/Productos/Agricola')"
            class="font-bold text-3xl"
          >
            Linea Implementos agricolas
          </button>
          <hr
            v-if="route.path === '/Productos/Agricola'"
            class="w-32 rounded-full border-secondary self-center border-2"
          />
        </div>
        <div class="flex flex-col gap-2 text-[#1C2646]">
          <button
            @click="router.push('/Productos/Industrial')"
            class="font-bold text-3xl"
          >
            Linea Industrial
          </button>
          <hr
            v-if="route.path === '/Productos/Industrial'"
            class="w-32 rounded-full border-secondary self-center border-2"
          />
        </div>
      </div>
    </div>
    <NuxtPage class="max-w-[1440px] w-full self-center"></NuxtPage>
  </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
</script>

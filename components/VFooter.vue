<template>
  <div class="flex bg-primary place-content-center pt-24 pb-32 z-40">
    <div class="flex-row flex text-white justify-around w-full max-w-[1440px]">
      <NuxtImg class="!h-14 self-center" src="/svg/logo.svg"></NuxtImg>
      <div class="flex flex-col gap-6">
        <div class="font-bold text-2xl">Contactanos</div>
        <div class="flex flex-row text-lg gap-6 items-center">
          <NuxtImg class="h-5" src="svg/footergps.svg"></NuxtImg>
          <div class="flex flex-col">
            <span>San Martín 2437 - Rosario </span>
            <span>Prov. de Santa Fé - Argentina </span>
          </div>
        </div>
        <div class="flex flex-row text-lg gap-3 items-center">
          <div class="flex flex-row gap-3 items-center">
            <NuxtImg class="h-5" src="svg/footerwsp.svg"></NuxtImg>
            <span>+54 9 341 5709283</span>
          </div>
          <div class="flex flex-row gap-3 items-center">
            <NuxtImg class="h-5" src="svg/footerphone.svg"></NuxtImg>
            <span>0341 5278954</span>
          </div>
        </div>
        <div class="flex flex-row text-lg gap-3 items-center">
          <NuxtImg class="h-5" src="svg/footermail.svg"></NuxtImg>
          <span>rosario@rodaservice.com.ar</span>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <div class="font-bold text-2xl flex">Redes Sociales</div>
        <div class="flex flex-row gap-3">
          <svgo-ig class="!h-7 !w-7"></svgo-ig>
          <svgo-fb class="!h-7 !w-7"></svgo-fb>
          <svgo-li class="!h-7 !w-7"></svgo-li>
        </div>
      </div>
    </div>
  </div>
</template>

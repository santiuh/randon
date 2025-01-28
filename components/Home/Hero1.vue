<template>
    <div class="flex flex-col bg-[url('img/Hero/Hero1.png')] bg-cover bg-no-repeat h-screen">
        <div class="max-w-[1440px] px-9  w-full justify-center h-full  self-center flex flex-col text-primary text-start gap-10">
            <div class="flex flex-col text-7xl font-extrabold">
                <p>Importamos directo </p>
                <p>de fábrica</p>
           </div>
           <span class="font-semibold">Somos distribuidores mayoristas de rodamientos,
           
            <p>             autopartes y agropartes.
            </p>
            </span>
            <div class="flex flex-row gap-8">
                <VButton
              titulo="Linea de productos"
              class="!bg-primary !text-white !text-xl"
              @click="router.push('/Productos')"

            ></VButton>
            <VButton
              titulo="Marcas"
              class=" !text-xl"
              @click="router.push('/Marcas')"

            ></VButton>
            </div>
     
        </div>
     
    </div>
</template>
<script setup>
const router = useRouter()
</script> 
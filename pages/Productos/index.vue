<template>
  <div class="flex flex-col w-full">
    <div
      class="w-full bg-[url('/img/productosbg.png')] bg-cover bg-no-repeat justify-center flex"
    >
      <div
        class="flex flex-row gap-1 italic font-bold text-6xl max-w-[1440px] w-full xl:px-32 px-4 py-28 items-baseline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59.145"
          height="40.998"
          viewBox="0 0 59.145 40.998"
        >
          <path
            id="Trazado_108"
            data-name="Trazado 108"
            d="M4820.587,289.348l30.269-30.269,10.729-10.729h18.147l-41.174,41Z"
            transform="translate(-4820.587 -248.35)"
            fill="#fff"
          />
        </svg>

        <h1>PRODUCTOS</h1>
      </div>
    </div>
    <div class="w-full bg-gray flex justify-center">
      <div
        class="max-w-[1440px] xl:px-32 px-4 py-24 gap-10 w-full grid grid-cols-4 gap"
      >
        <ProductosProducto
          :img="producto.img"
          :texto="producto.texto"
          v-for="(producto, i) in data"
          @click="router.push('/Productos/' + (i + 1))"
        ></ProductosProducto>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const data = [
  { img: "acoplado.png", texto: "Acoplado" },
  { img: "semirremolque.png", texto: "Semirremolque carga seca" },
  { img: "batea.png", texto: "Batea" },
  { img: "sider.png", texto: "Sider" },
  { img: "furgonfrig.png", texto: "Furgón frigorífico" },
  { img: "furgonpaq.png", texto: "Furgón paquetero" },
  { img: "tanque.png", texto: "Tanque" },
  { img: "silo.png", texto: "Silo" },
  { img: "carreton.png", texto: "Carretón" },
  { img: "portajumbo.png", texto: "Portajumbo" },
];
</script>

<template>
  <div class="flex flex-col w-full">
    <div
      class="bg-[url('/img/Productos/fondo.png')] bg-no-repeat bg-cover h-screen flex flex-col w-full"
    >
      <div
        class="w-full lg:max-w-[1440px] place-content-center flex flex-col h-full self-center lg:px-32 px-4"
      >
        <div class="flex flex-col lg:flex-row lg:pt-52">
          <div
            class="flex flex-col gap-6 w-full lg:w-1/3 text-center lg:text-start"
            data-aos="slide-right"
            data-aos-once="true"
          >
            <h1 class="text-2xl lg:text-7xl font-bold">
              {{ tablaActual?.nombre }}
            </h1>
            <svg
              class="!h-1 w-full lg:h-auto lg:w-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="229.054"
              height="6.758"
              viewBox="0 0 229.054 6.758"
            >
              <rect
                id="Rectángulo_189"
                data-name="Rectángulo 189"
                width="229.054"
                height="6.758"
                fill="#fff"
              />
            </svg>

            <span class="text-2xl">{{ tablaActual?.desc }}</span>
          </div>
          <NuxtImg
            data-aos="slide-left"
            data-aos-once="true"
            class="lg:!w-2/3 w-full !h-auto"
            :src="'/img/Productos/Big/' + tablaActual?.imagen + '.png'"
          ></NuxtImg>
        </div>
      </div>
    </div>
    <div
      class="w-full lg:max-w-[1440px] place-content-center flex flex-col h-full self-center py-20 lg:px-32 px-4 gap-28"
    >
      <div class="flex flex-col gap-2">
        <div v-if="tablaActual" class="grid grid-cols-1 gap-6">
          <div class="">
            <table
              class="min-w-full bg-gray-800 text-white border-separate border-spacing-y-4"
            >
              <thead class="bg-gray-700">
                <tr>
                  <th
                    v-for="(header, index) in tablaActual.headers"
                    :key="index"
                    class="text-left text-tertiary lg:text-2xl py-3 pl-2 lg:pl-6"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  data-aos="fade-up"
                  data-aos-once="true"
                  v-for="(fila, indexFila) in tablaActual.datos"
                  :key="indexFila"
                  style="
                    background: rgb(94, 94, 94);
                    background: linear-gradient(
                      90deg,
                      rgba(94, 94, 94, 0.9192051820728291) 0%,
                      rgba(94, 94, 94, 0.7903536414565826) 6%,
                      rgba(94, 94, 94, 0.23012955182072825) 72%,
                      rgba(94, 94, 94, 0) 100%
                    );
                  "
                >
                  <td
                    v-for="(valor, indexValor) in fila"
                    :key="indexValor"
                    class="lg:text-3xl py-3 pl-2 lg:pl-6"
                    :class="{
                      'rounded-l-xl': indexValor === 0,
                      'rounded-r-xl': indexValor === fila.length - 1,
                    }"
                  >
                    {{ valor }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          v-if="tablaActual?.extra"
          class="text-center lg:text-start lg:text-xl pl-6"
          data-aos="fade-up"
          data-aos-once="true"
        >
          {{ tablaActual.extra }}
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-center gap-4 lg:gap-12">
        <button v-if="tablaActual?.catalogo" @click="descargarCatalogos">
          <VButton titulo="Descargar el catálogo"> </VButton>
        </button>
        <VButton
          class="!bg-white text-secondary"
          @click="router.push('/Manuales')"
          titulo="Descargar el manual"
        >
        </VButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const router = useRouter();
const route = useRoute();
const id = route.params.id;

// Datos predefinidos con nombre, headers y datos
const tablas = ref([
  {
    id: "1",
    imagen: "acoplado",
    nombre: "Acoplado",
    desc: "Una de las unidades más pedidas por el mercado argentino. Ideal para el transporte de cargas paletizadas, cargas secas, granos y general.",
    extra: "*Color carrocería a elección.",
    catalogo: "ACOPLADO/Folleto_Acoplado",
    headers: ["Disp. de ejes", "Ejes", "Largo", "Tractor"],
    datos: [
      ["2+1", "3", "9.40 mts", "4x2"],
      ["2+1", "3", "9.60 mts", "4x2"],
      ["2+2", "4", "9.40 mts", "4x2"],
      ["2+2", "4", "9.60 mts", "6x2"],
      ["2+2", "4", "10.50 mts", "6x2"],
    ],
  },
  {
    id: "2",
    imagen: "semirremolque",
    nombre: "Semirremolque carga seca",
    desc: "Ideal para el transporte de cargas paletizadas, cargas secas y general. Ejes Suspensys, pata de apoyo Jost e instalación eléctrica de 24V LED.",
    catalogo: [
      "SEMIRREMOLQUE/Folleto_SR_01",
      "SEMIRREMOLQUE/Folleto_SR_02",
      "SEMIRREMOLQUE/Folleto_SR_03",
      "SEMIRREMOLQUE/Folleto_SR_04",
    ],
    headers: ["Disp. de ejes", "Largo", "Tractor", "PBTC"],
    datos: [
      ["2+1", "13.50mts", "4x2", "45tn"],
      ["2+1", "14.50mts", "4x2", "45tn"],
      ["2+1", "14.50mts", "6x2", "52.5tn"],
      ["2+1", "15.30mts", "4x2", "45tn"],
      ["2+1", "15.30mts", "6x2", "52.5tn"],
      ["3 ejes juntos", "14.50mts", "6x2", "52tn"],
      ["3 ejes juntos", "15.30mts", "6x2", "52tn"],
      ["1+1+1", "14.50mts", "6x2", "55.5tn"],
      ["1+1+1", "15.30mts", "6x2", "55.5tn"],
    ],
  },
  {
    id: "3",
    imagen: "batea",
    nombre: "Batea",
    desc: "Ideal para el transporte de arena, granos, fertilizantes, ripio, minerales y otros productos a granel.",
    extra: "*Color de lona a elección.",
    catalogo: [
      "BATEA/Folleto_Batea_01",
      "BATEA/Folleto_Batea_02",
      "BATEA/Folleto_Batea_03",
      "BATEA/Folleto_Batea_04",
      "BATEA/Folleto_Batea_05",
    ],
    headers: ["Disp. de ejes", "Largo", "Tractor", "PBTC"],
    datos: [
      ["2+1", "25m³", "4x2", "45tn"],
      ["2+1", "35m³", "6x2", "52.5tn"],
      ["2+1", "40m³", "4x2", "45tn"],
      ["3 ejes juntos", "25m³", "4x2", "45tn"],
      ["3 ejes juntos", "30mm³", "6x2", "52tn"],
      ["1+1+1 ", "35m³", "6x2", "55.5tn"],
      ["1+1+1", "40m³", "6x2", "55.5tn"],
    ],
  },
  {
    id: "4",
    imagen: "sider",
    nombre: "Sider",
    desc: "Unidad destinada al transporte de cargas paletizadas. Ejes suspensys, pata de apoyo jost, piso antideslizante, easy lock y central lock.",
    catalogo: [
      "SIDER/Folleto_SIDER_01",
      "SIDER/Folleto_SIDER_02",
      "SIDER/Folleto_SIDER_03",
    ],
    headers: ["Disp. de ejes", "Largo", "Tractor", "PBTC"],
    datos: [
      ["2+1", "14.60mts", "4x2", "45tn"],
      ["2+1", "14.60mts", "6x2", "52.5tn"],
      ["3 ejes juntos", "15.50mts", "6x2", "52tn"],
      ["1+1+1", "15.50mts", "6x2", "55.5tn"],
    ],
  },
  {
    id: "5",
    imagen: "furgonfrig",
    nombre: "Furgón Frigorífico",
    desc: "Unidad destinada al transporte de cargas refrigeradas. Mayor aislamiento, menor consumo, más vida útil del producto. Alta tecnología en inyección de poliuretano.",
    catalogo: [
      "FRIGORIFICO/Folleto_Frigorifico_01",
      "FURGON_FRIGORIFICO/Folleto_Frigorifico_02",
      "FURGON_FRIGORIFICO/Folleto_Frigorifico_03",
      "FURGON_FRIGORIFICO/Folleto_Frigorifico_04",
    ],
    headers: ["Disp. de ejes", "Largo", "Tractor", "PBTC"],
    datos: [
      ["2+1", "14.70mts", "4x2", "45tn"],
      ["2+1", "14.70mts", "6x2", "52.5tn"],
      ["3 ejes juntos", "14.70mts", "6x2", "52tn"],
    ],
  },
  {
    id: "6",
    imagen: "furgonpaq",
    nombre: "Furgón Paquetero",
    desc: "Unidad destinada al transporte de cargas paletizadas. Mayor capacidad de carga, más vida útil del producto. Alta tecnología en materiales.",
    catalogo: "PAQUETERO/Folleto_Paquetero",
    headers: ["Disp. de ejes", "Largo", "Tractor", "PBTC"],
    datos: [
      ["2+1", "15.45mts", "4x2", "45tn"],
      ["2+1", "15.45mts", "6x2", "45tn"],
      ["3 ejes juntos", "15.45mts", "6x2", "52tn"],
    ],
  },
  {
    id: "7",
    imagen: "tanque",
    nombre: "Tanque",
    desc: "Transporta diversas cargas con la mayor seguridad y calidad del mercado. Un tanque para cada necesidad.",
    catalogo: "TANQUE/Folleto_Tanque",
    headers: ["Material", "Disp. de ejes", "Cisternas", "Capacidad"],
    datos: [
      ["Acero al carbón", "1+1", "1", "35m³"],
      ["Acero al carbón", "3 ejes juntos", "7", "43m³"],
    ],
  },
  {
    id: "8",
    imagen: "silo",
    nombre: "Silo",
    desc: "Para el transporte de cemento, cal, cenizas, talco industrial, harina y otros materiales que utilizan sistema de descarga por presurización.",
    catalogo: ["SILO/Folleto_Silo_01", "SILO/Folleto_Silo_03"],
    headers: ["Disp. de ejes", "Capacidad", "PBTC"],
    datos: [
      ["2+1", "30m³", "52.5tn"],
      ["3 ejes juntos", "36m³", "52tn"],
      ["1+1+1", "38m³", "55.5tn"],
    ],
  },
  {
    id: "9",
    imagen: "carreton",
    nombre: "Carretón",
    desc: "Adecuado para el transporte de grandes máquinas para la industria metalmecánica y minera, cosechadoras de caña de azúcar, cosechadoras de granos, transformadores de alta tensión, turbinas, entre otros.",
    headers: ["Disp. de ejes", "Cuello", "Rampa trasera", "PBTC"],
    datos: [
      ["3 ejes juntos", "Fijo", "A elección", "45tn"],
      ["3 ejes juntos", "Desmontable", "A elección", "45tn"],
    ],
  },
  {
    id: "10",
    imagen: "portajumbo",
    nombre: "Portajumbo",
    desc: "Unidad diseñada para el transporte de grandes máquinas para la industria petrolera y contenedores.",
    headers: ["Modelo", "PBTC"],
    datos: [["3 ejes juntos", "45tn"]],
  },
]);

const tablaActual = computed(() =>
  tablas.value.find((tabla) => tabla.id === id)
);

const descargarCatalogos = () => {
  if (tablaActual.value?.catalogo) {
    const catalogos = Array.isArray(tablaActual.value.catalogo)
      ? tablaActual.value.catalogo
      : [tablaActual.value.catalogo];

    catalogos.forEach((catalogo) => {
      const nombreArchivo = `${catalogo}.pdf`;
      const rutaCompleta = `/docs/${catalogo}.pdf`;
      const link = document.createElement("a");
      link.href = rutaCompleta;
      link.download = nombreArchivo.split("/").pop(); // Tomamos la última parte como nombre
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Limpia el enlace temporal
    });
  }
};
// Filtrar la tabla correspondiente al ID de la URL
</script>

<template>
  <div class="flex flex-col lg:flex-row border lg:h-[70vh]">
    <!-- Lista de marcas -->
    <div
      class="flex flex-row lg:flex-col lg:gap-1 lg:w-1/5 overflow-scroll border bg-white"
    >
      <div
        class="bg-tertiary lg:pl-12 px-5 lg:px-0 text-nowrap text-xl py-5 hover:cursor-pointer hover:brightness-90 transition-all duration-300"
        :class="
          (i === 0 ? 'rounded-tl-3xl' : '',
          i === selectedMarcaId ? 'brightness-90' : '')
        "
        v-for="(dato, i) in data"
        :key="i"
        @click="selectedMarcaId = i"
      >
        {{ dato.marca }}
      </div>
    </div>

    <!-- Contenedor de contenido animado -->
    <div class="bg-tertiary flex lg:w-4/5 h-full py-6 lg:py-0 justify-center items-center">
      <transition name="fade-slide" mode="out-in">
        <div
          v-if="data[selectedMarcaId]"
          :key="selectedMarcaId"
          class="flex relative h-full items-center justify-center"
        >
          <div
            class="flex pb-14 flex-col relative justify-center h-[70%] px-3 lg:px-0 lg:w-[90%] xl:w-[80%]"
          >
            <div
              class="h-[90%] absolute bottom-0 bg-white w-[95%] lg:w-full rounded-lg shadow-2xl"
            ></div>
            <div
              class="flex flex-col lg:flex-row border-b border-tertiary py-4 z-10 px-3 lg:px-10 gap-8"
            >
              <NuxtImg
                class="drop-shadow-2xl w-2/3 lg:w-1/3 self-center aspect-square border-[#D4D4D4] border p-3 rounded-2xl"
                style="
                  background: linear-gradient(
                    90deg,
                    rgba(228, 228, 228, 1) 0%,
                    rgba(246, 247, 249, 1) 7%,
                    rgba(239, 239, 239, 1) 86%
                  );
                "
                :src="'img/Marcas/' + data[selectedMarcaId].marca + '.png'"
              ></NuxtImg>
              <p class="lg:w-2/3 self-center flex lg:pt-10">
                {{ data[selectedMarcaId].texto }}
              </p>
            </div>
            <div
              class="flex flex-col-reverse lg:flex-row gap-3 lg:gap-6 z-10 lg:py-7 px-3 lg:px-14"
            >
              <button
                class="text-xl justify-center lg:justify-start lg:text-3xl text-white flex flex-row items-center gap-3 bg-primary px-5 drop-shadow rounded-xl py-4 w-full lg:w-fit hover:scale-105 transition-all"
              >
                <p>Catálogo</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30.616"
                  height="29.275"
                  viewBox="0 0 30.616 29.275"
                >
                  <g
                    id="Grupo_250"
                    data-name="Grupo 250"
                    transform="translate(-5064.633 -967.177)"
                  >
                    <g id="Grupo_249" data-name="Grupo 249">
                      <path
                        id="Trazado_148"
                        data-name="Trazado 148"
                        d="M5087.446,980.109l-7.5,6.823-7.5-6.823"
                        fill="none"
                        stroke="#fff"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                    </g>
                    <line
                      id="Línea_19"
                      data-name="Línea 19"
                      y2="19.755"
                      transform="translate(5079.941 967.177)"
                      fill="none"
                      stroke="#fff"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      id="Trazado_149"
                      data-name="Trazado 149"
                      d="M5066.133,991.281v3.671h27.616v-3.671"
                      fill="none"
                      stroke="#fff"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                  </g>
                </svg>
              </button>
              <VButton
                titulo="Folletos Digitales"
                class="!bg-white !border-2 !border-primary !justify-center"
              />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Animaciones de entrada y salida */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

<script setup>
const selectedMarcaId = ref(0);

const data = [
  {
    marca: "DBH",
    texto:
      "DBH – Di Benedetto Hnos. S.A. es una industria pionera en la fabricación de piezas de caucho metal destinadas al mercado de reposición en el rubro autopartista como agroindustrial. Desde sus inicios se gano la confianza del consumidor, a partir de la producción de retenes, o’rings, crapodinas y soportes de cardan. Su planta se ubica en la ciudad de Rosario y tiene a Roda Service como distribuidor en la zona.",
  },
  {
    marca: "ETMA",
    texto:
      "ETMA es una industria nacional, dedicada a la fabricación de crucetas, tricetas y movimientos universales. Con más de 50 años en el mercado, responde a las más altas exigencias del mercado. Roda Service es distribuidor exclusivo en la ciudad de Rosario y alrededores, llegando también hacia todo el país.",
  },
  {
    marca: "FERSA",
    texto:
      "FERSA Bearings es una compañía multinacional española con más de 50 años de experiencia en el diseño, desarrollo y distribución de soluciones completas de rodamientos para el sector de la automoción a nivel mundial. Roda Service importa directo de fábrica sus productos, centrándose en la línea de rodamientos pesados, los cuales cuentan con una calidad de primer nivel, a un precio muy competitivo. Iniciando desde Rosario hacia todo el país.",
  },
  {
    marca: "HCH",
    texto:
      "HCH es una industria china, pionera en la fabricación de rodamientos en su país. Fue fundada en 1973, y con el paso del tiempo fue optimizando procesos y fortaleciendo la calidad de sus productos. Basándose en esa confiabilidad, Roda Service distribuye sus productos de forma constante en toda la región de Rosario, Santa Fe y todo el país.",
  },
  {
    marca: "IKO",
    texto:
      "IKO International Inc. Es una industria japonesa, dedicada al diseño y fabricación de rodamientos de agujas y guías lineales. Cuentan con todas las etapas de producción para cumplir con los más altos estándares de calidad, rendimiento y precisión. Desde hace años Roda Service importa sus productos, proveyendo de toda su variedad de rodamientos de agujas al mercado de reposición, tanto en la región de Rosario, como en todo el país.",
  },
  {
    marca: "KOYO",
    texto:
      "KOYO SEIKO CO. LTD fue fundada en 1921 por el Sr. IKEDA. Durante las décadas siguientes a su fundación, la compañía se posicionó como uno de los líderes mundiales en la fabricación de rodamientos para el sector automotriz, agrícola e industrial. En sus inicios en el país, KOYO depositó su confianza en Jacinto Amatriain, y luego en su sucesor, para que Roda Service pueda representarlos en la ciudad de Rosario, y en toda la Argentina.",
  },
  {
    marca: "KUGELL",
    texto:
      "KÜGELL S.A. es una industria argentina dedicada a la fabricación de autopartes, centrando sus esfuerzos en el desarrollo de tensores de correa, kits de distribución, ejes de bomba de agua y rodamientos especiales. Trabaja bajo las normas ISO 9001 asegurando así el óptimo funcionamiento de sus productos. Roda Service es distribuidor autorizado para la comercialización de sus artículos en Rosario y todo el país.",
  },
  {
    marca: "LOCTITE",
    texto:
      "LOCTITE es la marca líder mundial en adhesivos, selladores y productos para el tratamiento de superficies. Con la más avanzada tecnología, brinda soluciones al proporcionar adhesivos más eficientes, para liberar así el potencial limitado del hombre y la maquina. Roda Service es distribuidor autorizado, y trabaja en conjunto para brindar el mejor servicio en Rosario y toda la Argentina.",
  },
  {
    marca: "MBS",
    texto:
      "MBS Bearings es una fábrica de rodamientos de origen japonés. Sus productos son una gran alternativa si se busca excelente calidad a un precio accesible. Cuentan con una gran trayectoria en el rubro y, junto con Roda Service, llega a cada punto de Argentina, centrándose en la ciudad de Rosario.",
  },
  {
    marca: "NACHI",
    texto:
      "NACHI Bearings es un innovador fabricante mundial de productos como: rodamientos, herramientas de corte de precisión, equipos hidráulicos, máquinas herramienta, robots y acero de alta velocidad. Los mismos son producidos con los más altos estándares posibles y un compromiso acorde a los mismos. Roda Service es importador y distribuidor de todos los rodamientos de la marca, en Rosario y toda la región.",
  },
  {
    marca: "NSK",
    texto:
      "NSK es un fabricante mundial de rodamientos de bolas y rodillos. Sus productos pueden encontrarse en cualquier lugar donde haya elementos en movimiento. Desde rodamientos de alta precisión montados en turbinas eólicas hasta componentes automotrices ensamblados en los vehículos de los fabricantes más reconocidos. Desde años, NSK Argentina confía en Roda Service para distribuir sus productos en el país, centrándose en Rosario y toda la región.",
  },
  {
    marca: "NTN",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "PESARO",
    texto:
      "PESARO es una empresa italiana dedicada a la fabricación de rodamientos de jaulas de agujas. Cuenta con la mayor variedad de artículos a nivel mundial y una calidad de primer nivel. Junto con Roda Service, trabaja la línea de camiones, ómnibus, tractores, pick-ups, maquinas agrícolas y equipamientos industriales. Llegando así con sus productos a Rosario, sus alrededores y todo el país.",
  },
  {
    marca: "ROLLWAY",
    texto:
      "ROLLWAY Bearings es pionero en el sector de los rodamientos de bolas y rodillos. Fundada en 1908, ha construido una sólida reputación a lo largo de los años. A partir de allí, comenzaron a añadir calidad y eficiencia a sus productos. En Roda Service puede encontrar un distribuidor ubicado en la ciudad de Rosario, que ha sabido comercializar su amplia gama de productos, desde miniaturas hasta grandes rodamientos industriales.",
  },
  {
    marca: "VAR-NTN",
    texto:
      "Con más de 50 años en el mercado VAR-NTN se dedica a la fabricación y distribución de tensores y kits de rueda. Las poleas son armadas con rodamientos NTN, lo cual garantiza la máxima calidad y eficiencia, tan necesaria en el motor del vehículo. Su objetivo es brindar un producto de calidad, a un precio accesible para el consumidor, en conjunto con un servicio de primer nivel y garantía asegurada.",
  },
];
</script>

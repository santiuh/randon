<template>
  <div class="flex flex-row border">
    <div class="flex flex-col gap-1 w-2/5 overflow-scroll border">
      <div class="bg-tertiary pl-12 text-xl py-5" v-for="dato in data">
        {{ dato.marca }}
      </div>
    </div>
    <div class="bg-tertiary flex justify-center items-center p-10">
      <div class="flex relative">
        <div class="flex flex-col relative justify-center">
          <div class="absolute h-full w-full">
            <div class="h-1/6"></div>
            <div class="h-5/6 bg-white w-full rounded-lg shadow-2xl"></div>
          </div>
          <div class="flex flex-row border-b border-tertiary py-7 z-10 mx-14">
            <NuxtImg
              class="drop-shadow-2xl w-[440px]"
              src="img/Marcas/Marcas.png"
            ></NuxtImg>
            <p class="w-1/2 self-end flex">
              NTN en una de las tres marcas lideres a nivel mundial en la
              fabricación de rodamientos para el automotor, el agro y la
              industria. Cuenta con más de 68 plantas en todo el mundo y casi
              100 años de experiencia brindando primera calidad que respaldan su
              nombre. Roda Service importa directo de fábrica toda su línea de
              productos, ofreciendo así un amplio stock, desde la ciudad de
              Rosario hacia todo el país.
            </p>
          </div>
          <div class="flex flex-row gap-6 z-10 py-7 px-14">
            <button
              class="bg-[#1C2646] flex gap/5 text-white font-medium rounded-lg text-xl w-fit px-5 py-4 items-center"
            >
              <span>Catálogo</span>
            </button>
            <button
              class="border-[#1C2646] border-2 flex gap-5 text-xl text-[#1C2646] rounded-lg w-fit font-medium px-5 py-4 items-center"
            >
              <span>Folletos digitales</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.075"
                height="26.081"
                viewBox="0 0 14.075 26.081"
              >
                <g
                  id="Grupo_248"
                  data-name="Grupo 248"
                  transform="translate(-5364.583 -971.337)"
                >
                  <path
                    id="Trazado_147"
                    data-name="Trazado 147"
                    d="M5365.693,972.346l10.938,12.031-10.937,12.031"
                    fill="none"
                    stroke="#1c2646"
                    stroke-miterlimit="10"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const data = [
  {
    marca: "JBL",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "ADD",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "ABE",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "FEEQRE",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "LALOLO",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "JBL",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "122 ASD",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "EQWW",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "AAAWER",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "QQE",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "EREESSA",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "YPF",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "GGGE1",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "11123AAA",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
  {
    marca: "ASWWQQWE",
    texto:
      "NTN en una de las tres marcas lideres a nivel mundial en la fabricación de rodamientos para el automotor, el agro y la industria. Cuenta con más de 68 plantas en todo el mundo y casi 100 años de experiencia brindando primera calidad que respaldan su nombre. Roda Service importa directo de fábrica toda su línea de productos, ofreciendo así un amplio stock, desde la ciudad de Rosario hacia todo el país.",
  },
];
</script>

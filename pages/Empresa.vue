<template>
  <div class="flex flex-col w-full">
    <div
      class="w-full bg-[url('/img/empresabg.png')] bg-cover bg-no-repeat justify-center flex"
    >
      <div
        class="flex flex-row gap-1 italic font-bold text-6xl max-w-[1440px] w-full px-32 py-28 items-baseline"
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

        <h1>SOBRE NOSOTROS</h1>
      </div>
    </div>
    <div class="flex flex-col relative w-full bg-primary items-center">
      <div
        class="flex flex-col max-w-[1440px] w-full px-32 gap-20 z-10 py-16 text-xl"
      >
        <div
          class="flex flex-row justify-between w-full items-center px-16 py-10 rounded-[36px] shadow-xl bg-primary border-[#202020] border gap-7"
        >
          <div class="flex flex-col gap-4 w-2/3">
            <p>
              Somos <span class="font-bold text-2xl">Randon Argentina</span>,
              líderes en el mercado de acoplados y semirremolques.
            </p>
            <p>
              Desde el 1° de junio de 1994, nuestra planta está ubicada en
              Alvear, al sur del Gran Rosario. Con raíces en Brasil y 75 años de
              trayectoria global, llevamos 30 años adaptándonos al mercado
              argentino, siendo líderes en el rubro de acoplados y
              semirremolques reconocidos por nuestra calidad y tecnología.
            </p>
          </div>
          <NuxtImg class="rounded-xl w-1/3" src="/img/sobrenos1.png"></NuxtImg>
        </div>
        <div
          class="flex flex-row justify-between w-full px-16 py-10 rounded-[36px] shadow-xl bg-primary border-[#202020] border gap-7"
        >
          <NuxtImg class="rounded-xl w-1/3" src="/img/sobrenos2.png"></NuxtImg>
          <div class="flex flex-col gap-4 w-2/3">
            <p class="font-bold text-2xl">Innovación y producción</p>
            <p>
              Contamos con más de 130 empleados y trabajamos en innovaciones
              constantes, abriendo nuevas líneas de producción e incorporando
              tecnología para optimizar procesos, aumentar la eficiencia y
              cuidar el medio ambiente.
            </p>
            <p>
              Muchos de nuestros componentes diferenciados son fabricados por
              empresas del grupo Randoncorp, lo que nos permite garantizar
              calidad y seguridad.
            </p>
          </div>
        </div>
        <div
          class="flex flex-row justify-between w-full px-16 py-10 rounded-[36px] shadow-2xl bg-primary border-[#202020] border gap-7"
        >
          <div class="flex flex-col gap-4 w-2/3">
            <p class="font-bold text-2xl">Presencia nacional e internacional</p>
            <p>
              Operamos en todo el país a través de seis concesionarios oficiales
              y una red de vendedores calificados.
            </p>
            <p>
              Además de abastecer el mercado local, exportamos
              unidades,tecnología y conocimiento argentino a diversos países de
              América del Sur y el mundo.
            </p>
          </div>
          <NuxtImg class="rounded-xl w-1/3" src="/img/sobrenos3.png"></NuxtImg>
        </div>
      </div>

      <div class="h-full w-full flex flex-col absolute justify-between">
        <svgo-sobrenos1 class="!w-auto !h-96 self-end"></svgo-sobrenos1>
        <svgo-sobrenos1 class="!w-auto !h-96 self-start"></svgo-sobrenos1>
        <div class="flex self-end">
          <svg
            class="flex absolute right-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="725.964"
            height="418.709"
            viewBox="0 0 525.964 318.709"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectángulo_139"
                  data-name="Rectángulo 139"
                  width="525.964"
                  height="318.709"
                  transform="translate(883.047 508.581)"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Grupo_179"
              data-name="Grupo 179"
              transform="translate(-883.047 -508.581)"
            >
              <g
                id="Grupo_178"
                data-name="Grupo 178"
                clip-path="url(#clip-path)"
              >
                <g id="Grupo_177" data-name="Grupo 177">
                  <path
                    id="Trazado_215"
                    data-name="Trazado 215"
                    d="M835.7,874.815,998.683,711.829h72.144L907.139,874.815Z"
                    fill="#009fe3"
                  />
                  <path
                    id="Trazado_216"
                    data-name="Trazado 216"
                    d="M1070.7,711.829l162.986-162.986h72.144L1142.141,711.829Z"
                    fill="#009fe3"
                  />
                  <path
                    id="Trazado_217"
                    data-name="Trazado 217"
                    d="M1214.193,711.829l162.986-162.986h72.144L1285.634,711.829Z"
                    fill="#009fe3"
                  />
                  <path
                    id="Trazado_218"
                    data-name="Trazado 218"
                    d="M979.19,874.815l162.986-162.986h72.144L1050.631,874.815Z"
                    fill="#009fe3"
                  />
                  <path
                    id="Trazado_219"
                    data-name="Trazado 219"
                    d="M1122.682,874.815l162.986-162.986h72.144L1194.123,874.815Z"
                    fill="#009fe3"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full py-24 bg-primary items-center">
      <div class="flex flex-col max-w-[1440px] w-full px-32 z-10 py-16 text-xl">
        <span class="text-5xl font-bold text-center">VALORES</span>
        <div
          class="flex flex-row justify-around w-full text-2xl text-justify pt-20 pb-36"
        >
          <div class="flex flex-col w-1/3 gap-16">
            <div class="flex flex-col">
              <p class="font-bold">Seguridad y calidad:</p>
              <span>Son innegociables en todas las acciones y productos. </span>
            </div>
            <div class="flex flex-col">
              <p class="font-bold">Cliente siempre satisfecho:</p>
              <span
                >Construimos relaciones basadas en la confianza y cercanía.
              </span>
            </div>
            <div class="flex flex-col">
              <p class="font-bold">Ética:</p>
              <span
                >Promovemos la transparencia y seriedad en todas nuestras
                actividades.
              </span>
            </div>
          </div>
          <div class="flex flex-col w-1/3 gap-16">
            <div class="flex flex-col">
              <p class="font-bold">Ganancias con sostenibilidad:</p>
              <span
                >Buscamos resultados que generen empleo y crecimiento
                responsable.
              </span>
            </div>
            <div class="flex flex-col">
              <p class="font-bold">Innovación y tecnología:</p>
              <span
                >Nos mantenemos competitivos incorporando avances tecnológicos.
              </span>
            </div>
            <div class="flex flex-col">
              <p class="font-bold">Personas valoradas y respetadas:</p>
              <span
                >Reconocemos que el éxito depend de nuestra gente, fomentando su
                desarrollo personal y profesional.
              </span>
            </div>
          </div>
        </div>
        <span class="text-7xl italic font-bold text-center text-tertiary"
          >SOLO INNOVA QUIEN SE MUEVE</span
        >
      </div>
    </div>
  </div>
</template>
<script setup></script>

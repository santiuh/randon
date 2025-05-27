<template>
  <div
    class="w-full bg-gray flex flex-col justify-center items-center gap-7 !text-primary py-24 lg:py-12 px-4"
  >
    <h1
      class="text-4xl text-secondary font-medium tracking-widest leading-6"
      data-aos="fade-up"
      data-aos-once="true"
    >
      Manuales
    </h1>
    <div
      class="shadow rounded-xl bg-[#e0e1e2] px-4 pt-4 pb-8 lg:pt-4 lg:pb-4 flex flex-col w-full lg:max-w-[1440px]"
    >
      <div class="overflow-x-auto">
        <table
          class="min-w-full text-sm text-left text-gray-700 border-separate border-spacing-y-2"
        >
          <thead class="bg-gray-100 text-secondary text-gray-700">
            <tr>
              <th class="py-2 pl-2 min-w-[120px]">Manual</th>
              <th class="py-2 min-w-[100px]">Archivo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, i) in rawData" :key="i" class="bg-[#cccdce]">
              <td class="pl-2 font-bold rounded-l-xl">
                {{ entry.concesionario }}
              </td>
              <td class="py-2">
                <ul class="leading-tight">
                  <li
                    v-for="(localidad, idx) in entry.localidad"
                    :key="idx"
                    class="text-nowrap"
                  >
                    <button
                      @click="descargarCatalogos(localidad)"
                      class="text-blue-600 hover:underline"
                    >
                      Descargar manual.
                    </button>
                  </li>
                </ul>
              </td>
              <td class="py-2">
                <ul class="leading-tight">
                  <li v-for="(provincia, idx) in entry.provincia" :key="idx">
                    {{ provincia }}
                  </li>
                </ul>
              </td>
              <td class="py-2">
                <ul class="leading-tight">
                  <li v-for="(direccion, idx) in entry.direccion" :key="idx">
                    {{ direccion }}
                  </li>
                </ul>
              </td>
              <td class="py-2">
                <ul class="leading-tight">
                  <li v-for="(tel, idx) in entry.telefonos" :key="idx">
                    <span v-if="Array.isArray(tel)">{{ tel.join(", ") }}</span>
                    <span v-else>{{ tel }}</span>
                  </li>
                </ul>
              </td>
              <td class="py-2">
                <ul class="leading-tight">
                  <li
                    v-for="(email, idx) in normalizeArray(entry.mail)"
                    :key="idx"
                  >
                    <a :href="'mailto:' + email" class="hover:underline">{{
                      email
                    }}</a>
                  </li>
                </ul>
              </td>
              <td class="py-2 rounded-r-xl">
                <a
                  class="text-blue-600 hover:underline truncate block"
                  :href="'https://' + entry.web"
                  target="_blank"
                >
                  {{ entry.web }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Manuales | Randon Argentina",
  meta: [
    {
      name: "description",
      content: "Descargá manuales y documentación técnica de productos Randon.",
    },
    { property: "og:title", content: "Manuales | Randon Argentina" },
    {
      property: "og:description",
      content: "Descargá manuales y documentación técnica de productos Randon.",
    },
    { property: "og:type", content: "website" },
  ],
});

const rawData = [
  {
    concesionario: "Semirremolque",
    localidad: ["Manuales/Manual_Semirremolque"],
  },
  {
    concesionario: "Silo",
    localidad: ["Manuales/Manual_Semirremolque"],
  },
  {
    concesionario: "Carreton",
    localidad: ["Manuales/Manual_Semirremolque"],
  },
  {
    concesionario: "Frigorífico",
    localidad: ["Manuales/Manual_Semirremolque"],
  },
  {
    concesionario: "Sider",
    localidad: ["Manuales/Manual_Semirremolque"],
  },
  {
    concesionario: "Paquetero",
    localidad: ["Manuales/Manual_Semirremolque"],
  },
  {
    concesionario: "Tanque",
    localidad: ["Manuales/Manual_Semirremolque"],
  },
  {
    concesionario: "Batea",
    localidad: ["Manuales/Manual_Semirremolque"],
  },
];

// Transforma concesionarios con múltiples sucursales en varias filas
const processedData = rawData.flatMap((entry) => {
  const localidades = normalizeArray(entry.localidad);
  const provincias = normalizeArray(entry.provincia);
  const direcciones = normalizeArray(entry.direccion);
  const telefonos = normalizeArray(entry.telefonos);

  const max = Math.max(
    localidades.length,
    provincias.length,
    direcciones.length,
    telefonos.length
  );
  return Array.from({ length: max }).map((_, i) => ({
    concesionario: entry.concesionario,
    localidad: localidades[i] || "",
    provincia: provincias[i] || "",
    direccion: direcciones[i] || "",
    telefonos: Array.isArray(telefonos[i]) ? telefonos[i] : [telefonos[i]],
    mail: entry.mail,
    web: entry.web,
  }));
});

const descargarCatalogos = (catalogo) => {
  const nombreArchivo = `${catalogo}.pdf`;
  const rutaCompleta = `/docs/${catalogo}.pdf`;
  const link = document.createElement("a");
  link.href = rutaCompleta;
  link.download = nombreArchivo.split("/").pop(); // Tomamos la última parte como nombre
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // Limpia el enlace temporal
};

function normalizeArray(value) {
  if (Array.isArray(value)) return value;
  return [value];
}
</script>

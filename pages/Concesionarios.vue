<template>
  <div
    class="w-full bg-gray flex justify-center !text-primary py-24 lg:py-8 px-4"
  >
    <div
      class="shadow rounded-xl bg-[#e0e1e2] px-4 pt-4 pb-8 lg:pt-4 lg:pb-4 flex flex-col w-full lg:max-w-[1440px]"
    >
      <div class="overflow-x-auto">
        <table
          class="min-w-full text-sm text-left text-gray-700 border-separate border-spacing-y-2"
        >
          <thead class="bg-gray-100 text-secondary text-gray-700">
            <tr>
              <th class="py-2 pl-2 min-w-[120px]">Concesionario</th>
              <th class="py-2 min-w-[100px]">Localidad</th>
              <th class="py-2 min-w-[100px]">Provincia</th>
              <th class="py-2 min-w-[150px]">Dirección</th>
              <th class="py-2 min-w-[150px]">Teléfonos</th>
              <th class="py-2 min-w-[180px]">Mail</th>
              <th class="py-2 min-w-[120px] rounded-r-xl">Web</th>
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
                    class="text-nowrap"
                    v-for="(localidad, idx) in entry.localidad"
                    :key="idx"
                  >
                    {{ localidad }}
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
  title: "Concesionarios | Randon Argentina",
  meta: [
    {
      name: "description",
      content:
        "Encontrá concesionarios oficiales de Randon en todo el país. Atención y servicio especializado.",
    },
    { property: "og:title", content: "Concesionarios | Randon Argentina" },
    {
      property: "og:description",
      content:
        "Encontrá concesionarios oficiales de Randon en todo el país. Atención y servicio especializado.",
    },
    { property: "og:type", content: "website" },
  ],
});

const rawData = [
  {
    concesionario: "Fábrica",
    localidad: ["Alvear"],
    provincia: ["Santa Fe"],
    direccion: ["Ruta 16, km 4.5"],
    telefonos: ["(0341)-317-7400", "(0341)-157-484539"],
    mail: "ventas@randon.com.ar",
    web: "www.randon.com.ar",
  },
  {
    concesionario: "Abercar",
    localidad: ["Trelew", "Cipolletti", "Comodoro Riv."],
    provincia: ["Chubut", "Río Negro", "Chubut"],
    direccion: [
      "Ruta 3, km 1460",
      "Ruta 22, km 1213",
      "Hipólito Yrigoyen 4169",
    ],
    telefonos: [["(0280)-485-9760"], ["(0299)-421-3863"], ["(0297)-401-5116"]],
    mail: ["ventas@abercar.com.ar"],
    web: "www.abercar.com.ar/randon",
  },
  {
    concesionario: "Avelli",
    localidad: ["Posadas", "Paso de los Libres", "El Dorado"],
    provincia: ["Misiones", "Corrientes", "Misiones"],
    direccion: ["Ruta 12, km 5", "Ruta 117, km 9", "Ruta 12, km 1541"],
    telefonos: ["(0376)-448-0901", "(03772)-424-178", "(03751)-422-790"],
    mail: "informacion@avelliautomotores.com.ar",
    web: "www.avelliautomotores.com.ar",
  },
  {
    concesionario: "Central Acoplados",
    localidad: ["Moreno"],
    provincia: ["Buenos Aires"],
    direccion: ["Colectora Norte, Acceso Oeste, km 30"],
    telefonos: ["(011)-4170-5646", "(011)-3694-4474"],
    mail: "info@centralacoplados.com.ar",
    web: "www.centralacoplados.com.ar",
  },
  {
    concesionario: "Centrocam",
    localidad: ["Villa María"],
    provincia: ["Córdoba"],
    direccion: ["Colectora AU9 Cba-Rosario, km 562"],
    telefonos: ["(0353)-154-143981"],
    mail: ["info@centrocamsa.com.ar", "ventas1@centrocamsa.com.ar"],
    web: "www.centrocamsa.com.ar",
  },
  {
    concesionario: "Cuyosur",
    localidad: ["Maipú"],
    provincia: ["Mendoza"],
    direccion: ["Rodríguez Peña 3300"],
    telefonos: [
      "(0261)-497-8483",
      "(0261)-497-9029",
      "(0261)-497-9136",
      "(0261)-152-217447",
    ],
    mail: "info@cuyosur.com",
    web: "www.cuyosur.com",
  },
  {
    concesionario: "Rutasur",
    localidad: ["Bahía Blanca", "Quequén", "Mar del Plata"],
    provincia: ["Buenos Aires"],
    direccion: [
      "Ruta 3, km 696",
      "Ruta 3, km 1460",
      "Av. Presidente Perón 1271",
    ],
    telefonos: ["(02262)-154-14590", "(02262)-156-15392", "(0223)-155-927688"],
    mail: [
      "mschechtel@decker.com.ar",
      "ymartinez@decker.com.ar",
      "rmarinhes@decker.com.ar",
    ],
    web: "www.decker.com.ar",
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

function normalizeArray(value) {
  if (Array.isArray(value)) return value;
  return [value];
}
</script>

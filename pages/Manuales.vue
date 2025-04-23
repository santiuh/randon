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
const rawData = [
  {
    concesionario: "Fábrica",
    localidad: ["Alvear"],
  },
  {
    concesionario: "Abercar",
    localidad: ["Trelew", "Cipolletti", "Comodoro Riv."],
  },
  {
    concesionario: "Avelli",
    localidad: ["Posadas", "Paso de los Libres", "El Dorado"],
  },
  {
    concesionario: "Central Acoplados",
    localidad: ["Moreno"],
  },
  {
    concesionario: "Centrocam",
    localidad: ["Villa María"],
  },
  {
    concesionario: "Cuyosur",
    localidad: ["Maipú"],
  },
  {
    concesionario: "Rutasur",
    localidad: ["Bahía Blanca", "Quequén", "Mar del Plata"],
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

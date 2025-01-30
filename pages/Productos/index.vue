<template>
  <div class="flex flex-col pt-12 pb-24">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 w-full"
    >
      <ProductosProducto
        v-for="producto in productos"
        :key="producto.texto"
        :texto="producto.texto"
        :img="producto.imagen"
      ></ProductosProducto>
    </div>
  </div>
</template>
<script setup>
const productos = [
  { texto: "Crapodinas a rodillos de punta de eje", imagen: "Automotor1.png" },
  { texto: "Crapodinas de embrague", imagen: "Automotor2.png" },
  { texto: "Crapodinas de embrague", imagen: "Automotor3.png" }, // Repetido en el texto original
  { texto: "Crapodinas hidráulicas", imagen: "Automotor4.png" },
  { texto: "Ejes de bombas de agua", imagen: "Automotor5.png" },
  { texto: "Grasas y lubricantes", imagen: "Automotor6.png" },
  { texto: "Jaulas de agujas Pesaro", imagen: "Automotor7.png" },
  { texto: "Jaulas de agujas", imagen: "Automotor8.png" },
  { texto: "Kit tensor más correa", imagen: "Automotor9.png" },
  { texto: "Mazas de rueda", imagen: "Automotor10.png" },
  { texto: "Mazas de ruedas con ABS magnéticos", imagen: "Automotor11.png" },
  { texto: "Productos Loctite", imagen: "Automotor12.png" },
  { texto: "Reformas cardan", imagen: "Automotor13.png" },
  { texto: "Reformas para centro de cardan", imagen: "Automotor14.png" },
  { texto: "Retenes y crapodinas DBH", imagen: "Automotor15.png" },
  {
    texto: "Rodamientos de una hilera de rodillos cónicos",
    imagen: "Automotor16.png",
  },
  { texto: "Tensores INA", imagen: "Automotor17.png" },
  { texto: "Tensores Kugellager", imagen: "Automotor18.png" },
  { texto: "Tensores SKF", imagen: "Automotor19.png" },
  { texto: "Tensores VAR", imagen: "Automotor20.png" },
];
</script>

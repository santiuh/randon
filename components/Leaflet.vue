<template>
  <div style="height: 100vh; width: 100vw">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="[-34.6037, -58.3816]"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="[-34.6118, -58.4173]" />
      <LMarker :lat-lng="[-34.6037, -58.3816]" />
      <LMarker :lat-lng="[-34.6158, -58.4333]" />
      <LMarker :lat-lng="[-31.6333, -60.7]" />
      <LMarker :lat-lng="[-31.6239, -60.6942]" />
    </LMap>
  </div>
</template>

<script setup>
import { ref } from "vue";
const zoom = ref(6);
</script>

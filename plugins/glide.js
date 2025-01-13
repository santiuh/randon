import Glide from "@glidejs/glide";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("glide", Glide);
});

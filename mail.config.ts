// Configuración de nuxt-mail para SMTP
export default {
  mail: {
    message: {
      to: "ventas@randon.com.ar", // Cambia esto por el destinatario real
    },
    // La configuración SMTP se trasladó a runtimeConfig para la compatibilidad con Nuxt 3
  },
};

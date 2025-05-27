<template>
  <div class="w-full bg-gray flex flex-col">
    <div
      class="flex flex-col lg:max-w-[1440px] w-full self-center lg:px-32 px-4 pb-32"
    >
      <div class="flex flex-col text-center pb-16 pt-32 lg:py-16">
        <h1
          class="text-2xl text-secondary font-medium tracking-widest leading-6"
          data-aos="fade-up"
          data-aos-once="true"
        >
          NOVEDADES
        </h1>
        <h2
          class="text-3xl lg:text-[54px] font-bold text-black leading-tight"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="400"
        >
          Enterate de lo último
        </h2>
      </div>

      <div
        class="bg-white grid grid-flow-row grid-cols-1 lg:grid-cols-3 rounded-[38px] px-4 lg:px-16 gap-x-5 gap-y-6 py-20 drop-shadow-2xl"
      >
        <div
          v-for="(post, i) in posts.length ? posts : Array(6).fill({})"
          :key="post.id || i"
          class="aspect-square w-full bg-gray-100 rounded-2xl overflow-hidden"
        >
          <a
            v-if="posts.length"
            :href="post.permalink"
            target="_blank"
            class="w-full h-full block"
          >
            <img
              v-if="
                post.media_type === 'IMAGE' ||
                post.media_type === 'CAROUSEL_ALBUM'
              "
              :src="post.media_url"
              class="object-cover w-full h-full"
              alt="Instagram post"
            />
            <video
              v-else-if="post.media_type === 'VIDEO'"
              :src="post.media_url"
              class="object-cover w-full h-full"
              autoplay
              muted
              loop
            ></video>
          </a>
          <div
            v-else
            class="w-full h-full bg-gray-300 animate-pulse rounded-2xl"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Novedades | Randon Argentina",
  meta: [
    {
      name: "description",
      content:
        "Enterate de las últimas novedades, lanzamientos y noticias de Randon Argentina.",
    },
    { property: "og:title", content: "Novedades | Randon Argentina" },
    {
      property: "og:description",
      content:
        "Enterate de las últimas novedades, lanzamientos y noticias de Randon Argentina.",
    },
    { property: "og:type", content: "website" },
  ],
});

const config = useRuntimeConfig();
const IG_TOKEN = config.public.IG_TOKEN;
const IG_ID = config.public.IG_ID;

const posts = ref([]);

onMounted(async () => {
  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${IG_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${IG_TOKEN}`
    );
    const data = await res.json();
    posts.value = data.data.slice(0, 6);
  } catch (err) {
    console.error("Error al obtener el feed de Instagram:", err);
  }
});
</script>

<template>
  <div class="text-4xl">Videos</div>

  <NuxtLink to="/videos/favoritos">Favoritos</NuxtLink>
  <h1>{{ $t("titulo") }}</h1>
  <div class="videos">
    <div v-for="video in videos" :key="video.id">
      <h2>{{ video.descricao }}</h2>
      <p v-data-horario="'dd/mm/yyyy'">{{ video.data_postagem }}</p>
      <iframe
        :src="video.url"
        title="Youtube Video Player"
        width="550"
        height="400"
        frameborder="0"
      ></iframe>
      <div>
        <button @click="adicionarFavorito(video)">Adicionar Favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritos } from "../../composables/states";
import type { Video } from "~/interfaces/video";
import { useVideoStore } from "../../stores/video";

const { adicionarFavorito } = useVideoStore();
const { $toast } = useNuxtApp();

onMounted(() => {
  $toast.success("Toast adicionado com sucesso!");
});

const videos: Video[] = [
  {
    id: 1,
    descricao: "01 - Introdução",
    url: "https://www.youtube.com/watch?v=d-4fyzA2ZC8",
    data_postagem: "2023-10-15",
  },
  {
    id: 2,
    descricao: "02 - Configuração",
    url: "https://www.youtube.com/watch?v=d-4fyzA2ZC8",
    data_postagem: "2023-10-20",
  },
];
</script>

<style lang="scss" scoped>
.videos {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.videos button {
  display: inline-block;
}
</style>

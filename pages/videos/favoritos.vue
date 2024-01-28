<template>
  <div>Vídeos Favoritos</div>
  <div class="videos">
    <div v-for="video in favoritos" :key="video.id">
      <h2>{{ video.descricao }}</h2>
      <iframe
        :src="video.url"
        title="Youtube Video Player"
        width="550"
        height="400"
        frameborder="0"
      ></iframe>
      <div>
        <button @click="videoStore.deletaFavorito(video.id)">Remover Favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritos } from "../../composables/states";
import { useVideoStore } from "../../stores/video";

const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);
</script>

<style lang="scss" scoped></style>

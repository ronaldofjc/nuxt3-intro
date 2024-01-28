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
        <button @click="removeFavorito(video.id)">Remover Favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritos } from "../../composables/states";
import { useVideoStore } from "../../stores/video";

const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);
const { $toast } = useNuxtApp();

const removeFavorito = (id: number) => {
  videoStore.deletaFavorito(id);
  $toast.error("Removido com sucesso");
};
</script>

<style lang="scss" scoped></style>

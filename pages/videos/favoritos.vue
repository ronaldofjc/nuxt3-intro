<template>
  <h1 class="text-4xl text-center mb-4">{{ $t("tituloFavoritos") }}</h1>
  <div>
    <div class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
      <UCard v-for="video in favoritos" :key="video.id">
        {{ video.descricao }}

        <iframe
          class="h-48 w-full"
          :src="video.url"
          title="YouTube video player"
          frameborder="0"
        />
        <template #footer>
          <div class="flex justify-between">
            <UButton @click="removeFavorito(video.id)"> Remover Favorito </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVideoStore } from "../../stores/video";

const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);
const { $toast } = useNuxtApp();

const removeFavorito = (id: number) => {
  videoStore.deletaFavorito(id);
  $toast.error("Removido com sucesso");
};
</script>

<template>
  <div class="text-4xl text-center">{{ $t("titulo") }}</div class="text-4xl">
  <br/>
  <div class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
    <UCard v-for="video in videos" :key="video.id">
      <template #header>{{ video.descricao }}</template>

      <iframe
        class="h-48 w-full"
        :src="video.url"
        title="Youtube Video Player"
        frameborder="0"
      />

      <template #footer>
        <div class="flex justify-between">
          <UButton @click="favoritar(video)">Adicionar Favorito</UButton>
          <NuxtLink
            :to="{ 
              name: 'videos-id',
              params: {
                id: video.id.toString()
              }  
            }"
          >
            <UButton label="Ver Vídeo" color="gray">
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right-20-solid" />
              </template>
            </UButton>
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import type { Video } from "~/interfaces/video";
import { useVideoStore } from "../../stores/video";

const { adicionarFavorito } = useVideoStore();
const { $toast } = useNuxtApp();

const favoritar = (video: Video) => {
  adicionarFavorito(video)
  $toast.success("Adicionado aos favoritos com sucesso!");
}

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

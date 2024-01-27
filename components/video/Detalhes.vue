<template>
  <div>
    <h1>Componentes - Nuxt 3</h1>
    <p>Autor: Ronaldo Feitosa</p>
    <p>{{ diferencaEmDias }} dias atrás</p>
  </div>
</template>

<script setup lang="ts">
const { diasPassados, diferencaEmDias } = useFormatacao();
const dataVideo = new Date(2024, 0, 2);

diasPassados(dataVideo);
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container">
    <div class="text-center">{{ appTitle }}</div>
  </div>
</template>

<script setup lang="ts">
import { useExampleStore } from '~/store/exampleStore';

const exampleStore = useExampleStore();
const appTitle = computed(() => exampleStore.getAppTitle);
</script>

<style scoped></style>

<template>
  <div class="page-height d-flex flex-column justify-center align-center">
    <div class="text-center">{{ appTitle }}</div>
  </div>
</template>

<script setup lang="ts">
import { useExampleStore } from '~/store/exampleStore';

const exampleStore = useExampleStore();
const appTitle = computed(() => exampleStore.getAppTitle);
</script>

<style scoped>
.page-height {
  min-height: 40vh;
}
</style>

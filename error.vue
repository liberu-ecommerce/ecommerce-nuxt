<template>
  <div>
    <v-container class="d-flex justify-center align-center error__container">
      <div class="text-center">
        <h3 data-qa="status-code">{{ error.statusCode }}</h3>
        <h3 data-qa="error-message">{{ error.message }}</h3>
        <v-btn variant="outlined" class="text-lowercase text-green" data-qa="clear-error-btn" @click="handleError"
          >Home</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts" name="error-page">
defineProps(['error']);
const handleError = () => clearError({ redirect: '/' });
</script>

<style lang="scss" scoped>
.error__container {
  height: 70vh;
}
</style>

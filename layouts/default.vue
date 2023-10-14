<template>
  <v-app>
    <nav-top-header />
    <nav-header />
    <div class="pt-8 container">
      <v-row>
        <v-col cols="12" md="3" class="d-flex justify-center justify-sm-space-between"><nav-side-nav /></v-col>
        <v-col cols="12" md="9"><slot /></v-col>
      </v-row>
    </div>
    <Footer />
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
</style>

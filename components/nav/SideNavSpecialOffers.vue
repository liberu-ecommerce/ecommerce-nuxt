<template>
  <div>
    <v-card class="" width="300">
      <div class="px-3 py-5">
        <v-list-item-subtitle>Special Offers</v-list-item-subtitle>
      </div>
      <v-divider class="mb-3"></v-divider>

      <div>
        <v-carousel show-arrows="hover" height="400" hide-delimiters progress="primary">
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%">
              <div class="d-flex fill-height justify-center align-center">
                <div class="">{{ slide }} Slide</div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const slides = ['offer one', 'offer two', 'offer three', 'offer four', 'offer five'];
</script>

<style scoped></style>

<template>
  <div class="header-top">
    <v-row justify="space-between" class="nav-container">
      <v-col>
        <div>
          <p class="font-size-14">Telephone Enquiry <span>(+123) 123 321 345</span></p>
        </div>
      </v-col>

      <v-col>
        <div class="d-flex justify-end font-size-14">
          <p>Currency : <span>USD $</span></p>
          <p class="pl-4">Language : <span>English</span></p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-top {
  background: #f8f9f9;
  border-bottom: 1px solid #e1e1e1;
}

.nav-container {
  width: 80vw;
  margin: 0 auto;
}

.font-size-14 {
  font-size: 14px;
}
</style>

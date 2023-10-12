<template>
  <div class="py-1">
    <v-row justify-lg="space-between" class="nav-container">
      <v-col cols="6" class="d-flex align-center justify-center" lg="1">
        <div>Logo</div>
      </v-col>

      <v-col cols="6" class="d-lg-none d-flex align-center justify-lg-end" lg="2">
        <div class="d-flex">
          <div class="d-flex">
            <p class="font-size-18">Account</p>
            <v-icon end icon="mdi-account-outline"></v-icon>
          </div>

          <div class="d-flex px-2">
            <p class="font-size-18">Help</p>
            <v-icon end icon="mdi-help-circle-outline"></v-icon>
          </div>

          <div class="d-flex">
            <p class="font-size-18">Cart</p>
            <v-icon end icon="mdi-cart-outline"></v-icon>
          </div>
        </div>
      </v-col>

      <v-col cols="12" lg="7" class="d-flex justify-center justify-lg-start">
        <div class="d-flex align-center search-bar-width">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            density="comfortable"
            variant="outlined"
            label="Search products"
            append-inner-icon="search"
            single-line
            hide-details
            class="rounded-pill search-bar-width"
          />
          <v-btn size="large" class="ml-2">Search</v-btn>
        </div>
      </v-col>

      <v-col cols="12" class="d-none d-lg-flex align-center justify-center justify-lg-end" lg="2">
        <div class="d-flex">
          <div class="d-flex">
            <p class="font-size-18">Account</p>
            <v-icon end icon="mdi-account-outline"></v-icon>
          </div>

          <div class="d-flex px-2">
            <p class="font-size-18">Help</p>
            <v-icon end icon="mdi-help-circle-outline"></v-icon>
          </div>

          <div class="d-flex">
            <p class="font-size-18">Cart</p>
            <v-icon end icon="mdi-cart-outline"></v-icon>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
  <hr />
</template>

<script setup lang="ts"></script>

<style scoped>
.nav-container {
  width: 80vw;
  margin: 0 auto;
}

.search-bar-width {
  min-width: 90%;
}

.font-size-18 {
  font-size: 18px;
}

.line-height-25 {
  line-height: 25px;
}
</style>

<template>
  <div class="container pt-8">
    <v-row class="footer-container">
      <v-col cols="12" sm="6" md="3">
        <div class="footer-text-color d-flex justify-center justify-md-start">
          <ul class="foot-list-style">
            <template v-for="(item, i) in contactInfo" :key="i">
              <div class="d-flex my-2">
                <v-icon :icon="item.icon"></v-icon>
                <li class="px-4">{{ item.text }}</li>
              </div>
            </template>
          </ul>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <div class="d-flex flex-column align-center align-md-center footer-text-color">
          <h3 class="text-white">Customer Service</h3>
          <ul>
            <template v-for="(item, i) in servicesList" :key="i">
              <li>{{ item }}</li>
            </template>
          </ul>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <div class="d-flex flex-column align-center align-md-center footer-text-color">
          <h3 class="text-white ml-n16">Corporation</h3>
          <ul>
            <template v-for="(item, i) in corporationList" :key="i">
              <li>{{ item }}</li>
            </template>
          </ul>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <div class="d-flex flex-column align-center align-md-end footer-text-color">
          <h3 class="text-white ml-n10">Why Choose Us</h3>
          <ul>
            <template v-for="(item, i) in whyUsList" :key="i">
              <li>{{ item }}</li>
            </template>
          </ul>
        </div>
      </v-col>
    </v-row>

    <hr class="footer-divider mt-5" />
    <v-row class="footer-container d-flex justify-space-between py-1">
      <v-col class="pl-md-0">
        <div>
          <v-btn
            color="white"
            v-for="icon in socialMediaIcons"
            :key="icon"
            class=""
            :icon="icon"
            variant="text"
          ></v-btn>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex justify-end pr-md-0">
        <div>
          <v-btn
            color="white"
            v-for="icon in socialMediaIcons"
            :key="icon"
            class=""
            :icon="icon"
            variant="text"
          ></v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const contactInfo = [
  { text: 'example@gmail.com', icon: 'mdi-email' },
  { text: 'location', icon: 'mdi-map-marker-outline' },
  { text: '+44-', icon: 'mdi-phone-outline' }
];

const socialMediaIcons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'];

const servicesList = ['My Account', 'Order History', 'FQA', 'Help Center'];
const corporationList = ['About Us', 'Customer Service', 'Company', 'Advance Search', 'Investor Relations'];
const whyUsList = ['Shopping Guid', 'Blog', 'Company', 'Investor Relations', 'Contact Us'];
</script>

<style scoped>
.footer-container {
  max-width: 80% !important;
  margin: 0 auto !important;
}

.container {
  background-color: #2e353b;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.footer-text-color {
  color: #abafb1;
}

.footer-divider {
  color: #eaedee;
}

.foot-list-style {
  list-style-type: none;
}
</style>

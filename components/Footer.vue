<template>
  <div>
    <v-row class="footer-container">
      <v-col>
        <div>
          <v-list density="compact">
            <v-list-item v-for="(contact, i) in contactInfo" :key="i" :value="contact" color="primary">
              <template v-slot:prepend>
                <v-icon :icon="contact.icon"></v-icon>
              </template>

              <v-list-item-title>{{ contact.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column align-center">
          <h3>Customer Service</h3>
          <ul>
            <template v-for="(item, i) in servicesList" :key="i">
              <li>{{ item }}</li>
            </template>
          </ul>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column align-center">
          <h3>Corporation</h3>
          <ul>
            <template v-for="(item, i) in corporationList" :key="i">
              <li>{{ item }}</li>
            </template>
          </ul>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column align-center">
          <h3>Why Choose Us</h3>
          <ul>
            <template v-for="(item, i) in whyUsList" :key="i">
              <li>{{ item }}</li>
            </template>
          </ul>
        </div>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col>
        <div></div>
      </v-col>
      <v-col>
        <div></div>
      </v-col>
    </v-row> -->
  </div>
</template>

<script setup lang="ts">
const contactInfo = [
  { text: 'example@gmail.com', icon: 'mdi-email' },
  { text: 'location', icon: 'mdi-map-marker-outline' },
  { text: '+44-', icon: 'mdi-phone-outline' }
];

const servicesList = ['My Account', 'Order History', 'FQA', 'Help Center'];
const corporationList = ['About Us', 'Customer Service', 'Company', 'Advance Search', 'Investor Relations'];
const whyUsList = ['Shopping Guid', 'Blog', 'Company', 'Investor Relations', 'Contact Us'];
</script>

<style scoped>
.footer-container {
  max-width: 80%;
  margin: 0 auto;
}
</style>

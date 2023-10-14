<template>
  <div>
    <v-card class="" max-width="300">
      <v-list>
        <div class="px-3 py-5">
          <v-list-item-subtitle>Categories</v-list-item-subtitle>
        </div>
        <v-divider class="mb-3"></v-divider>
        <template v-for="(item, i) in menuItems" :key="i">
          <v-list-item class="py-2">
            <div class="d-flex">
              <div class="pr-2">
                <v-icon left>{{ item.icon }}</v-icon>
              </div>
              <div>{{ item.item }}</div>
              <v-spacer></v-spacer>
              <v-btn @focus="setActiveMenuIndex(i)" icon elevation="0" :id="`menu-activator-${i}`"
                ><v-icon left>mdi-chevron-right </v-icon></v-btn
              >
            </div>
          </v-list-item>
        </template>
      </v-list>
    </v-card>

    <v-menu open-on-click :activator="`#menu-activator-${activeMenuIndex}`" location="end">
      <div class="ml-8">
        <nav-side-nav-sub-menu />
      </div>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
const activeMenuIndex = ref<number | null>(null);
const menuItems = [
  { item: 'Clothing', icon: 'mdi-television' },
  { item: 'Electronics', icon: 'mdi-television' },
  { item: 'Shoes', icon: 'mdi-shoe-print' },
  { item: 'Sports', icon: 'mdi-tennis-ball' },
  { item: 'Health and Beauty', icon: 'mdi-hospital-box-outline' },
  { item: 'Home and Garden', icon: 'mdi-hexagram-outline' }
];

function setActiveMenuIndex(index: number) {
  activeMenuIndex.value = index;
}
</script>

<style scoped></style>

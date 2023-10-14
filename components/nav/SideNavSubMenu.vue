<template>
  <div>
    <v-card class="py-6 px-8 sub-menu" min-width="700">
      <v-row justify="space-between" class="">
        <v-col cols="12" md="3">
          <ul class="list-unstyled links">
            <template v-for="(item, i) in list4" :key="i">
              <li class="py-1">
                <a href="#">{{ item.name }} </a>
              </li>
            </template>
          </ul>
        </v-col>

        <v-col cols="12" md="3" class="d-flex justify-center">
          <ul class="list-unstyled links">
            <template v-for="(item, i) in list2" :key="i">
              <li class="py-1">
                <a href="#">{{ item.name }} </a>
              </li>
            </template>
          </ul>
        </v-col>

        <v-col cols="12" md="3" class="d-flex justify-center">
          <ul class="list-unstyled links">
            <template v-for="(item, i) in list3" :key="i">
              <li class="py-1">
                <a href="#">{{ item.name }} </a>
              </li>
            </template>
          </ul>
        </v-col>

        <v-col cols="12" md="3" class="d-flex justify-end">
          <ul class="list-unstyled links">
            <template v-for="(item, i) in list1" :key="i">
              <li class="py-1">
                <a href="#">{{ item.name }} </a>
              </li>
            </template>
          </ul>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const list1 = [
  { name: 'Sandals', link: '' },
  { name: 'Shorts', link: '' },
  { name: 'Dresses', link: '' },
  { name: 'Jwellery', link: '' }
];

const list2 = [
  { name: `Toys & Games`, link: '' },
  { name: 'Jeans', link: '' },
  { name: 'Shirts', link: '' },
  { name: 'Shoes', link: '' }
];

const list3 = [
  { name: 'Sandals', link: '' },
  { name: 'Shorts', link: '' },
  { name: 'Dresses', link: '' },
  { name: 'Jwellery', link: '' }
];

const list4 = [
  { name: 'Dresses', link: '' },
  { name: 'Shoes', link: '' },
  { name: 'Jackets', link: '' },
  { name: 'Sunglasses', link: '' }
];
</script>

<style scoped>
.list-unstyled {
  list-style: none;
}

.links li a {
  text-decoration: none;
  color: #565656;
  font-size: 14px;
}

.links li a:hover {
  text-decoration: none;
  color: green;
}
</style>

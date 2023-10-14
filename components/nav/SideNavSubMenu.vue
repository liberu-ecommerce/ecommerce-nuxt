<template>
  <div>
    <v-card class="py-6 px-8 sub-menu mr-n16 mr-md-0">
      <v-row justify="space-between">
        <v-col cols="6" md="3" class="d-flex justify-center">
          <ul class="list-unstyled links">
            <template v-for="(item, i) in list4" :key="i">
              <li class="">
                <a href="#">{{ item.name }} </a>
              </li>
            </template>
          </ul>
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ul class="list-unstyled links">
            <template v-for="(item, i) in list2" :key="i">
              <li class="">
                <a href="#">{{ item.name }} </a>
              </li>
            </template>
          </ul>
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ul class="list-unstyled links">
            <template v-for="(item, i) in list3" :key="i">
              <li class="">
                <a href="#">{{ item.name }} </a>
              </li>
            </template>
          </ul>
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-md-end">
          <ul class="list-unstyled links">
            <template v-for="(item, i) in list1" :key="i">
              <li class="">
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
.sub-menu {
  width: 300px;
}

@media only screen and (min-width: 960px) {
  .sub-menu {
    width: 700px;
  }
}
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

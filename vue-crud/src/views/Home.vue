<template>
  <div class="home">
      <h1> Products  </h1>
      <template v-for="(product, index) in products">
        <Product :key="index" v-bind="product"/>
      </template>
  </div>
</template>

<script>
// @ is an alias to /src

import Product from '@/components/Product'
export default {
  name: 'home',
  components: {
    Product
  },
  data () {
    return {
      products: null
    }
  },

  created () {
    this.products = JSON.parse(localStorage.getItem('items'))
  }
}
</script>

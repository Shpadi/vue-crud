<template>
  <div class="product">
    <div class="product__id"> {{ id }}</div>
    <div class="product_name"> {{ name }}</div>
    <div class="product__description"> {{ description }}</div>
    <div class="product__actions">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseProduct',
  props: {
    id: Number,
    name: String,
    description: String
  }
}
</script>

<style lang="scss" scoped>
  .product {

  }
</style>

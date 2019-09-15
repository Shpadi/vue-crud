<template>
  <div class="home">
      <h1> Products  </h1>
      <table class="product-table">
        <thead class="product-table__head">
          <td class="head__id"> ID </td>
          <td class="head__name"> Name </td>
          <td class="head__description"> Description </td>
          <td> Actions </td>
        </thead>
        <template v-for="(product, index) in productItems">
          <Product :key="index" v-bind="product" @deleteId="setDeleteId"/>
        </template>
      </table>
      <template v-if="!productItems.length">
        <p>No products here </p>
      </template>
      <BaseBtn label="Create" href="/create" />
      <modal name="delete-item" width="300" height="150">
        <div class="delete-modal">
          <p>  Are you sure to delete this element ? </p>
          <div>
          <span @click="confirmDelete">
            <BaseBtn label="Yes"/>
          </span>
            <span @click="hideModal">
            <BaseBtn label="No"/>
          </span>
          </div>
        </div>
      </modal>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from 'vuex'
import Product from '@/components/Product'
export default {
  name: 'home',
  components: {
    Product
  },

  data () {
    return {
      deleteId: null
    }
  },

  computed: {
    ...mapState('crud', ['productItems'])
  },
  methods: {
    ...mapMutations({
      deleteItem: 'crud/deleteItem'
    }),
    hideModal () {
      this.$modal.hide('delete-item')
    },
    setDeleteId (id) {
      this.deleteId = id
    },
    confirmDelete () {
      this.hideModal()
      this.deleteItem(this.deleteId)
    }
  }
}
</script>
<style lang="scss" scoped>
  .product-table {
    margin: 0 auto 30px;
    border-collapse: collapse;

    &__head {
      border-bottom: 2px solid $c-grey;

      td {
        padding: 10px 0;
      }
    }
  }

  .delete-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    text-align: center;

    p{
      text-align: center;
      width: 100%;
    }
  }

  .head {
    &__id {
      width: 50px;
    }

    &__name {
      width: 100px;
    }

    &__description {
      width: 200px;
    }
  }
</style>

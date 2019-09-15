<template>
  <div class="create">
    <h1> Create Product </h1>
    <div class="create__from">
      <BaseForm :fields="fields" @submit="submit"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Create',
  data () {
    return {
      idValue: null,
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Name'
        },
        {
          type: 'text',
          name: 'description',
          label: 'Description',
          tag: 'textarea'
        },
        {
          type: 'checkbox',
          name: 'canEdit',
          label: 'I can edit this product (choose for editing in future)'
        }
      ]
    }
  },

  computed: {
    ...mapState('crud', ['productItems'])
  },

  methods: {
    ...mapActions({
      createProduct: 'crud/createProduct'
    }),
    submit (data) {
      const payload = {
        data,
        onSuccess: this.goHome
      }
      if (this.productItems.length) data.id = this.productItems[this.productItems.length - 1].id + 1
      else data.id = 0
      this.createProduct(payload)
    },

    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>

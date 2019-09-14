<template>
  <div class="create">
    <h1> Create Product </h1>
    <div class="create__from">
      <BaseForm :fields="fields" @submit="submit"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
          label: 'I can`t edit this product'
        }
      ]
    }
  },

  methods: {
    ...mapActions({
      createProduct: 'create/createProduct'
    }),
    submit (data) {
      const payload = {
        data,
        onSuccess: this.writeToStorage
      }
      this.createProduct(payload)
    },
    writeToStorage (data) {
      let server = localStorage.getItem('items')
      if (server) {
        server = JSON.parse(server)
        server.push(data)
        return localStorage.setItem('items', JSON.stringify(server))
      }
      return localStorage.setItem('items', JSON.stringify([ data ]))
    }
  }
}
</script>

<style scoped>

</style>

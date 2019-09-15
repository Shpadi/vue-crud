<template>
  <div class="update">
    <h1> Update Product </h1>
    <template v-if="itemsLoaded">
      <BaseForm :fields="fields" buttonLabel="Update" @submit="submit"/>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Update',
  data () {
    return {
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
          label: 'I can edit this product'
        }
      ],
      itemsLoaded: false,
      itemId: null
    }
  },

  mounted () {
    const payload = {
      id: Number(this.$route.params.id),
      onSuccess: this.setItem
    }
    this.getItem(payload)
  },

  methods: {
    ...mapActions({
      getItem: 'crud/getItem',
      updateItem: 'crud/updateItem'
    }),
    setItem (result) {
      this.itemId = result.id
      this.fields.map((item) => {
        item.value = result[item.name]
      })
      this.itemsLoaded = true
    },

    submit (data) {
      data.id = this.itemId
      const payload = {
        data,
        onSuccess: this.updateSuccess
      }
      this.updateItem(payload)
    },

    updateSuccess () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>

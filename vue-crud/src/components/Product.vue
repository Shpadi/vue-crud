<template>
  <tr class="product">
    <td class="product__id"> {{ id }}</td>
    <td class="product_name"> {{ name }}</td>
    <td class="product__description"> {{ description }}</td>
    <td class="product__actions">
      <BaseBtn
        label="Update"
        :isDisabled="!canEdit"
        :href="`update/${id}`"
      />
      <span @click="deleteItemAction(id)">
        <BaseBtn label="Delete" isWarning/>
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'BaseProduct',
  props: {
    id: Number,
    name: String,
    description: String,
    canEdit: Number
  },

  methods: {
    deleteItemAction (id) {
      this.$modal.show('delete-item')
      this.$emit('deleteId', id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .product {
    border-bottom: 1px solid $c-grey;

    td {
      padding: 10px 0;
    }

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

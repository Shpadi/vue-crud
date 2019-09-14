<template>
  <label class="base-checkbox">
    <input type="checkbox" @change="onChange"/>
    <span> {{ label }} </span>
  </label>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    value: null,
    label: String
  },

  methods: {
    onChange ({ target }) {
      this.$emit('input', target.checked)
    }
  }
}
</script>

<style scoped lang="scss">
  .base-checkbox {
    display: block;
    text-align: left;
    margin-bottom: 20px;
  }
</style>

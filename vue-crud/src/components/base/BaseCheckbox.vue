<template>
  <label class="base-checkbox">
    <input type="checkbox" @change="onChange" :ref="name"/>
    <span> {{ label }} </span>
  </label>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    name: String,
    value: null,
    label: String
  },

  mounted () {
    this.$refs[this.name].checked = this.value
  },

  methods: {
    onChange ({ target }) {
      this.$emit('input', target.checked ? 1 : 0)
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

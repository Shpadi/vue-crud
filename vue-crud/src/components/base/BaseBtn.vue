<template>
  <component
    :is="createComponent"
    :to="href"
    :class="['base-btn',{
      'base-btn--disabled': isDisabled,
      'base-btn--warning': isWarning,
      'base-btn--confirm': isConfirm
    }]"
  >
    {{ label }}
  </component>
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    label: String,
    href: String,
    isDisabled: {
      type: Boolean,
      default: false
    },
    isWarning: {
      type: Boolean,
      default: false
    },
    isConfirm: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    createComponent () {
      if (this.href) return 'router-link'
      return 'button'
    }
  }
}
</script>

<style scoped lang="scss">
  .base-btn {
    padding: 10px 30px;
    border: 0;
    border-radius: 3px;
    background-color: $c-black;
    color: $c-white;

    &--disabled {
      background-color: $c-grey;
    }

    &--warning {
      background-color: $c-red;
    }

    &--confirm {
      background-color: $c-green;
    }

  }
</style>

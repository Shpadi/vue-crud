<template>
  <label :class="['base-input', {'base-input--active': onFocus || value, 'base-input--error': error}]">
    <span class="base-input__label"> {{ label }} </span>
    <component
      :is="tag || 'input'"
      :type="type"
      :value="value"
      @change="onInput"
      @focus="onFocus = true"
      @blur="onFocus = false"
      class="base-input__item"
    />
    <transition name="fade">
      <span v-if="error" class="base-input__error-hint"> {{ error }} </span>
    </transition>
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: String,
    name: String,
    label: String,
    error: String,
    type: {
      type: String,
      default: 'text'
    },
    tag: String
  },

  data () {
    return {
      onFocus: false
    }
  },
  methods: {
    onInput ({ target }) {
      this.$emit('clearError', this.name)
      this.$emit('input', target.value)
    }
  }
}
</script>

<style scoped lang="scss">
  .base-input {
    width: 100%;
    position: relative;
    display: block;
    margin-bottom: 20px;

    &__item {
      width: 100%;
      outline: none;
      padding: 10px 0;
      border: 0;
      border-bottom: 1px solid $c-black;
      display: block;
    }

    &__label {
      position: absolute;
      top: 10px;
      left: 0;
      transition: 0.2s linear;
    }

    &--active {
      .base-input__label {
        font-size: 10px;
        top: -10px;
      }
    }

    &--error {
      color: $c-red;

      .base-input__item {
        border-bottom-color: $c-red;
      }
    }

    &__error-hint {
      position: relative;
      top: -5px;
      font-size: 10px;
      text-align: left;
      transition: 0.2s linear;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>

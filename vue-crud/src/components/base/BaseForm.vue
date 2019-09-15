<template>
  <form class="base-form" @submit.prevent="submit">
    <template v-for="(field, index) in fields">
      <component
        :key="`field-${index}`"
        :is="createComponent(field.type)"
        :error="hasError(field.name)"
        v-bind="field"
        v-model="formData[field.name]"
        @clearError="clearError"
      />
    </template>

    <div class="base-form__button">
      <BaseBtn :label="buttonLabel" />
      <BaseBtn label="Cancel" href="/"/>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseForm',
  props: {
    fields: Array,
    buttonLabel: {
      type: String,
      default: 'Create'
    }
  },

  data () {
    const formData = {}
    const errors = {}
    this.fields.forEach(field => {
      if (field.type === 'checkbox') {
        formData[field.name] = field.value || 0
        errors[field.name] = 0
      } else {
        formData[field.name] = field.value || ''
        errors[field.name] = null
      }
    })
    return {
      formData,
      errors
    }
  },

  computed: {
    ...mapState('crud', ['formErrors'])
  },

  watch: {
    formErrors (val) {
      this.errors = val
    }
  },

  methods: {
    createComponent (type) {
      switch (type) {
        case 'text': return 'BaseInput'
        // if we wont to add checkbox or something else (add checkbox to fom for example)
        case 'checkbox': return 'BaseCheckbox'
      }
    },
    hasError (name) {
      return this.errors[name]
    },
    clearError (name) {
      this.errors[name] = ''
    },
    submit () {
      Object.keys(this.formData).forEach(key => {
        if (this.formData[key] === '') this.errors[key] = `Some error in field ${key}`
      })
      const isFormHavingErrors = Object.keys(this.errors).some((key) => {
        return this.errors[key]
      })
      if (!isFormHavingErrors) this.$emit('submit', this.formData)
    }
  }
}
</script>

<style scoped lang="scss">
    .base-form {
      max-width: 500px;
      margin: 50px auto;
    }
</style>

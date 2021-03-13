<template>
  <ValidationProvider
    v-slot="{ errors }"
    tag="div"
    :name="field"
    :vid="vid"
    :rules="rules">
    <!--Label-->
    <label
      v-if="label"
      class="label">
      {{ label }}

      <span
        v-if="rules.includes('required')"
        class="required"
        v-text="'*'" />
    </label>
    <!--Input-->
    <div
      :class="{'has-error': errors[0]}">
      <el-input
        :suffix-icon="icon"
        :type="type"
        :disabled="disabledInput"
        :placeholder="placeholder"
        :value="value"
        :size="size"
        :maxlength="maxLength"
        @input="handleType($event)" />

      <!--Message Error-->
      <span
        v-if="errors[0]"
        class="errors">
        {{ errors[0] }}
      </span>
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: 'InputField',

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    label: {
      type: String,
      default: ''
    },

    field: {
      type: String,
      default: ''
    },

    rules: {
      type: String,
      default: ''
    },

    vid: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },

    value: {
      type: [String, Number],
      default: ''
    },

    disabledInput: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: 'text'
    },

    maxLength: {
      type: [String, Number],
      default: ''
    },

    size: {
      type: String,
      default: 'small'
    },

    icon: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleType ($event) {
      this.$emit('change', $event)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

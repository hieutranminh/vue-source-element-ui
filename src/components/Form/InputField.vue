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

    <!--Field-->
    <div
      :class="{'has-error': errors[0]}">
      <!--Input-->
      <el-input
        :suffix-icon="suffixIcon"
        :prefix-icon="prefixIcon"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="value"
        :size="size"
        :maxlength="maxLength"
        :clearable="clearable"
        :show-password="showPassword"
        :show-word-limit="showWordLimit"
        :autosize="autosize"
        @input="handleType($event)">
        <template
          v-if="mixed.length"
          :slot="mixed">
          {{ mixedText }}
        </template>
      </el-input>

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

    disabled: {
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
      default: ''
    },

    suffixIcon: {
      type: String,
      default: ''
    },

    prefixIcon: {
      type: String,
      default: ''
    },

    clearable: {
      type: Boolean,
      default: false
    },

    showPassword: {
      type: Boolean,
      default: false
    },

    showWordLimit: {
      type: Boolean,
      default: false
    },

    autosize: {
      type: [Boolean, Object],
      default: false
    },

    mixed: {
      type: String,
      default: ''
    },

    mixedText: {
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

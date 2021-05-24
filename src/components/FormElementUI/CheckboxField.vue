<template>
  <ValidationProvider
    v-slot="{ errors }"
    tag="div"
    :name="field"
    :vid="vid"
    :rules="rules ? { required: { allowFalse: false } } : ''">
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

    <!--Checkbox single-->
    <div
      :class="{'has-error': errors[0]}">
      <el-checkbox
        class="mb-0"
        :value="value"
        :true-label="trueLabel"
        :false-label="falseLabel"
        :disabled="disabled"
        :border="border"
        :size="size"
        @change="onChange">
        {{ optionName }}
      </el-checkbox>

      <!--Message Error-->
      <span
        v-if="errors[0]"
        class="errors d-block">
        {{ errors[0] }}
      </span>
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: 'CheckboxField',

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
      type: [String, Object],
      default: ''
    },

    vid: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    },

    optionName: {
      type: String,
      default: ''
    },

    trueLabel: {
      type: [String, Boolean, Number],
      default: undefined
    },

    falseLabel: {
      type: [String, Boolean, Number],
      default: undefined
    },

    value: {
      type: [String, Boolean, Number],
      required: true,
      default: false
    },

    border: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: ''
    }
  },

  methods: {
    onChange (e) {
      this.$emit('change', e)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="checkbox">
    <!--Label-->
    <label
      v-if="label"
      class="label"
      v-text="label" />

    <!--Checkbox single-->
    <div>
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
    </div>
  </div>
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

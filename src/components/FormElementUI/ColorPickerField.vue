<template>
  <div class="color-picker">
    <!--Label-->
    <label
      v-if="label"
      class="label"
      v-text="label" />

    <!--Field-->
    <div>
      <el-color-picker
        :value="value"
        :disabled="disabled"
        :show-alpha="showAlpha"
        :size="size"
        :predefine="predefineColors"
        :color-format="colorFormat"
        @[eventName]="onChange" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPickerField',

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    label: {
      type: String,
      default: ''
    },

    value: {
      type: String,
      default: null
    },

    disabled: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: ''
    },

    showAlpha: {
      type: Boolean,
      default: false
    },

    predefineColors: {
      type: Array,
      default: undefined
    },

    colorFormat: {
      type: String,
      default: undefined
    },

    eventName: {
      type: String,
      default: 'change'
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

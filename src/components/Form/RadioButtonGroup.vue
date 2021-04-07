<template>
  <div class="radio-group">
    <!--Label-->
    <label
      v-if="label"
      class="label"
      v-text="label" />

    <!--Field-->
    <div>
      <el-radio-group
        :value="value"
        :disabled="disabled"
        :size="size"
        @input="onChange">
        <el-radio-button
          v-for="item in options.list"
          :key="item[options.unique]"
          :label="item[options.label]">
          {{ item[options.label] }}
        </el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButtonGroup',

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
      type: [String, Number],
      default: ''
    },

    options: {
      type: Object,
      required: true
    },

    disabled: {
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

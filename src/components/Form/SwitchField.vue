<template>
  <div class="switch">
    <!--Label-->
    <label
      v-if="label"
      class="label"
      v-text="label" />

    <!--Field-->
    <div>
      <el-switch
        :value="value"
        :active-color="activeColor"
        :inactive-color="inactiveColor"
        :active-value="activeValue"
        :inactive-value="inactiveValue"
        :active-text="activeText"
        :inactive-text="inactiveText"
        :disabled="disabled"
        @change="onChange" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchField',

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
      type: [Boolean, String, Number],
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    activeColor: {
      type: String,
      default: '#409eff'
    },

    inactiveColor: {
      type: String,
      default: '#dcdfe6'
    },

    activeValue: {
      type: [Boolean, String, Number],
      default: undefined
    },

    inactiveValue: {
      type: [Boolean, String, Number],
      default: undefined
    },

    activeText: {
      type: String,
      default: ''
    },

    inactiveText: {
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

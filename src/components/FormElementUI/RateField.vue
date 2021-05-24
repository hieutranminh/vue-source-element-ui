<template>
  <div class="rate">
    <!--Label-->
    <label
      v-if="label"
      class="label"
      v-text="label" />

    <!--Field-->
    <div>
      <el-rate
        :allow-half="allowHalf"
        :void-icon-class="voidIconClass"
        :icon-classes="iconClasses"
        :show-text="showText"
        :value="value"
        :disabled="disabled"
        :colors="colors"
        :texts="texts"
        :disabled-void-color="disabledVoidColor"
        :max="max"
        @change="onChange" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RateField',

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
      type: Number,
      default: null
    },

    disabled: {
      type: Boolean,
      default: false
    },

    disabledVoidColor: {
      type: String,
      default: ''
    },

    colors: {
      type: Array,
      default: undefined
    },

    showText: {
      type: Boolean,
      default: false
    },

    texts: {
      type: Array,
      default: undefined
    },

    iconClasses: {
      type: Array,
      default: undefined
    },

    voidIconClass: {
      type: String,
      default: undefined
    },

    allowHalf: {
      type: Boolean,
      default: false
    },

    max: {
      type: Number,
      default: 5
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

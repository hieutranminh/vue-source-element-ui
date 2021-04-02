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
      <el-checkbox-group
        :value="value"
        :max="max"
        @input="onInput">
        <el-checkbox
          v-for="(item, index) in list"
          :key="index"
          :label="item" />
      </el-checkbox-group>

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
  name: 'CheckboxGroup',

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

    value: {
      type: Array,
      default: () => []
    },

    disabled: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: ''
    },

    list: {
      type: Array,
      required: () => []
    },

    checkObject: {
      type: Boolean,
      default: false
    },

    max: {
      type: Number,
      default: undefined
    }
  },

  methods: {
    onInput (e) {
      this.$emit('change', e)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

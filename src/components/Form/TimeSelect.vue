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
      <!--Time select-->
      <el-time-select
        v-model="time"
        :picker-options="pickerOptions"
        :size="size"
        :placeholder="placeholder"
        :prefix-icon="prefixIcon"
        @change="onChange" />

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
  name: 'TimeSelect',

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

    timeValue: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: ''
    },

    clearable: {
      type: Boolean,
      default: false
    },

    pickerOptions: {
      type: Object,
      default: () => {}
    },

    prefixIcon: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      time: ''
    }
  },

  created () {
    if (this.timeValue) {
      this.time = this.timeValue
    }
  },

  methods: {
    onChange (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 100%;
}
</style>

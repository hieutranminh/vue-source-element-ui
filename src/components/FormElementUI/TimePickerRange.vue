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
      <!--Timepicker-->
      <el-time-picker
        v-model="timeRange"
        is-range
        :value-format="valueFormat"
        :range-separator="rangeSeparator"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        :arrow-control="arrowControl"
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
  name: 'TimePickerRange',

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

    timeValue: {
      type: [String, Date, Array],
      default: () => []
    },

    size: {
      type: String,
      default: ''
    },

    valueFormat: {
      type: String,
      default: ''
    },

    rangeSeparator: {
      type: String,
      default: 'To'
    },

    startPlaceholder: {
      type: String,
      default: 'Start time'
    },

    endPlaceholder: {
      type: String,
      default: 'End time'
    },

    arrowControl: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      timeRange: ''
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
  .el-date-editor {
    width: 100%;
  }
</style>

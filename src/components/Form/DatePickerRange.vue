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
      <!--Datepicker-->
      <el-date-picker
        v-model="dateRange"
        :type="type"
        :size="size"
        :unlink-panels="unlinkPanels"
        :range-separator="rangeSeparator"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        :picker-options="pickerOptions"
        :format="format"
        :value-format="valueFormat"
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
  name: 'DatePickerRange',

  props: {
    label: {
      type: String,
      default: ''
    },

    field: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'daterange'
    },

    rules: {
      type: String,
      default: ''
    },

    vid: {
      type: String,
      default: ''
    },

    rangeSeparator: {
      type: String,
      default: 'To'
    },

    startPlaceholder: {
      type: String,
      default: 'Start date'
    },

    endPlaceholder: {
      type: String,
      default: 'End date'
    },

    size: {
      type: String,
      default: ''
    },

    prefixIcon: {
      type: String,
      default: ''
    },

    valueFormat: {
      type: String,
      default: ''
    },

    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },

    pickerOptions: {
      type: Object,
      default: () => {}
    },

    unlinkPanels: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      dateRange: ''
    }
  },

  // created () {
  //   if (this.dateValue) {
  //     this.date = this.dateValue
  //
  //     this.$emit('change', this.date)
  //   }
  // },

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

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
        v-model="date"
        :size="size"
        :type="type"
        :default-time="defaultTime"
        :placeholder="placeholder"
        :picker-options="pickerOptions"
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
  name: 'DatePicker',

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

    type: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },

    dateValue: {
      type: [String, Date],
      default: ''
    },

    size: {
      type: String,
      default: ''
    },

    pickerOptions: {
      type: Object,
      default: () => {}
    },

    prefixIcon: {
      type: String,
      default: ''
    },

    valueFormat: {
      type: String,
      default: ''
    },

    defaultTime: {
      type: [String, Array],
      default: ''
    }
  },

  data () {
    return {
      date: ''
    }
  },

  // created () {
  //   if (this.timeValue) {
  //     this.time = this.timeValue
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
.el-input {
  width: 100%;
}
</style>

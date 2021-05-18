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
        :picker-options="options ? pickerOptions : {}"
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
    },

    options: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      date: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: 'Today',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: 'Yesterday',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: 'A week ago',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      }
    }
  },

  created () {
    if (this.dateValue) {
      this.date = this.dateValue

      this.$emit('change', this.date)
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

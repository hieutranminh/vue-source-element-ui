<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <!--Date time picker-->
          <div class="row">
            <div class="col-md-6">
              <!--Default-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="datetime"
                placeholder="Date time picker"
                vid="date_time_picker"
                :label="'Date time picker'"
                :field="'Date time picker'"
                @change="dateTimePicker.default = $event" />

              <!--Default time-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="datetime"
                placeholder="Date default time"
                vid="date_default_time"
                default-time="12:00:00"
                :label="'Date default time'"
                :field="'Date default time'"
                @change="dateTimePicker.default_time = $event" />
            </div>

            <div class="col-md-6">
              <!--Format-->
              <!--https://element.eleme.io/#/en-US/component/date-picker#date-formats-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="datetime"
                placeholder="Format time picker"
                vid="format_time_picker"
                value-format="dd-MM-yyyy hh:mm:ss"
                :label="'Format time picker'"
                :field="'Format time picker'"
                @change="dateTimePicker.format = $event" />

              <!--Picker options-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="datetime"
                placeholder="Picker options"
                vid="picker_options"
                :label="'Picker options'"
                :field="'Picker options'"
                :picker-options="pickerOptions"
                @change="dateTimePicker.picker_options = $event" />
            </div>
          </div>

          <!--Date time picker range-->
          <div class="row">
            <div class="col-md-12">
              <hr>
              <!--Date time picker range-->
              <h5 class="text-info">
                Date Time Picker Range
              </h5>

              <!--Range-->
              <DatePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="time_picker_range"
                type="datetimerange"
                :label="'Time picker range'"
                :field="'Time picker range'"
                @change="dateTimePicker.range = $event" />

              <!--Range format-->
              <DatePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="range_format"
                type="datetimerange"
                value-format="yyyy-MM HH:mm"
                format="yyyy-MM HH:mm"
                :label="'Range format'"
                :field="'Range format'"
                @change="dateTimePicker.range_format = $event" />

              <!--Range picker options-->
              <DatePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="range_picker_options"
                type="datetimerange"
                start-placeholder="Begin"
                end-placeholder="End"
                range-separator="-"
                :picker-options="rangePickerOptions"
                :label="'Range picker options'"
                :field="'Range picker options'"
                @change="dateTimePicker.range_picker_option = $event" />

              <!--Set default time-->
              <DatePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="set_default_time"
                type="datetimerange"
                :default-time="['12:00:00', '08:00:00']"
                :label="'Set default time'"
                :field="'Set default time'"
                @change="dateTimePicker.set_default_time = $event" />
            </div>
          </div>
        </div>

        <!--Object Data-->
        <div class="col-md-4">
          <div class="bg-light d-flex align-items-center h-100">
            <ul style="padding: 15px">
              {
              <li
                v-for="(value, name) in dateTimePicker"
                :key="name+'time'"
                class="ml-3"
                style="listStyle: none">
                <b
                  class="text-success"
                  v-text="name" /> :
                <span
                  style="word-break: break-word"
                  v-text="value" />
              </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DatePicker from '@/components/FormElementUI/DatePicker'
import DatePickerRange from '@/components/FormElementUI/DatePickerRange'
export default {
  name: 'ElementDateTimePicker',

  components: {
    DatePickerRange,
    DatePicker
  },

  data () {
    return {
      dateTimePicker: {
        default: '',
        default_time: '',
        format: '',
        picker_options: '',
        range: '',
        range_format: '',
        range_picker_option: '',
        set_default_time: ''
      },
      pickerOptions: {
        shortcuts: [{
          text: 'Today',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: 'Yesterday',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: 'A week ago',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      rangePickerOptions: {
        shortcuts: [{
          text: 'Last week',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last month',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last 3 months',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

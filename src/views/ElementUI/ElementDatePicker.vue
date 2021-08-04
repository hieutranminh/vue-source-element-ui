<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <!--Date picker-->
          <div class="row">
            <div class="col-md-6">
              <!--Date-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="date"
                placeholder="Date picker"
                vid="date_picker"
                :label="'Date picker'"
                :field="'Date picker'"
                @change="datePicker.date = $event" />

              <!--Date format-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="date"
                placeholder="Date picker format"
                vid="date_picker_format"
                format="dd-MM-yyyy"
                value-format="dd-MM-yyyy"
                :label="'Date picker format'"
                :field="'Date picker format'"
                @change="datePicker.date_format = $event" />

              <!--Date format timestamp-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="date"
                placeholder="Date format timestamp"
                vid="date_format_timestamp"
                value-format="timestamp"
                :label="'Date format timestamp'"
                :field="'Date format timestamp'"
                @change="datePicker.date_timestamp = $event" />

              <!--Date set value-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="date"
                placeholder="Date set value"
                vid="date_set_value"
                date-value="2021/05/12"
                value-format="yyyy/MM/dd"
                :label="'Date set value'"
                :field="'Date set value'"
                @change="datePicker.set_date = $event" />

              <!--Date picker option-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="date"
                placeholder="Date picker option"
                vid="date_picker_option"
                :picker-options="pickerOptions"
                :label="'Date picker option'"
                :field="'Date picker option'"
                @change="datePicker.date_options = $event" />
            </div>

            <div class="col-md-6">
              <!--Week-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="week"
                format="Week WW"
                placeholder="Pick a week"
                vid="week"
                :label="'Pick a week'"
                :field="'Pick a week'"
                @change="datePicker.week = $event" />

              <!--Month-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                placeholder="Pick a month"
                vid="month"
                :label="'Pick a month'"
                :field="'Pick a month'"
                @change="datePicker.month = $event" />

              <!--Year-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="year"
                format="yyyy"
                value-format="yyyy"
                placeholder="Pick a year"
                vid="year"
                :label="'Pick a year'"
                :field="'Pick a year'"
                @change="datePicker.year = $event" />

              <!--More dates-->
              <DatePicker
                class="mb-3"
                rules="required"
                size="medium"
                type="dates"
                placeholder="Pick one or more dates"
                vid="dates"
                :label="'More dates (Array)'"
                :field="'More dates'"
                @change="datePicker.dates = $event" />
            </div>
          </div>

          <!--Date picker range-->
          <div class="row">
            <div class="col-md-12">
              <hr>
              <!--Range default-->
              <h5 class="text-info">
                Date range picker
              </h5>

              <!--Range default-->
              <DatePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="range"
                :label="'Range'"
                :field="'Range'"
                @change="datePicker.range = $event" />

              <!--Range format-->
              <DatePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="range_format"
                format="dd-MM-yyyy"
                value-format="dd-MM-yyyy"
                start-placeholder="Begin"
                end-placeholder="End"
                range-separator="-"
                :label="'Range format'"
                :field="'Range format'"
                @change="datePicker.range_format = $event" />

              <!--Unlink panels-->
              <DatePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="unlink_panels"
                :unlink-panels="true"
                :label="'Unlink panels'"
                :field="'Unlink panels'"
                @change="datePicker.unlink_panels = $event" />

              <!--Range picker option-->
              <DatePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="range_picker_option"
                :unlink-panels="true"
                :label="'Range picker option'"
                :field="'Range picker option'"
                :picker-options="rangePickerOptions"
                @change="datePicker.range_picker_option = $event" />

              <!--Range month-->
              <DatePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="range_month"
                type="monthrange"
                start-placeholder="Start month"
                end-placeholder="End month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                :label="'Range month'"
                :field="'Range month'"
                @change="datePicker.range_month = $event" />
            </div>
          </div>
        </div>

        <!--Object Data-->
        <div class="col-md-4">
          <div class="bg-light d-flex align-items-center h-100">
            <ul style="padding: 15px">
              {
              <li
                v-for="(value, name) in datePicker"
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
  name: 'ElementDatePicker',

  components: {
    DatePickerRange,
    DatePicker
  },

  data () {
    return {
      datePicker: {
        date: '',
        date_format: '',
        date_timestamp: '',
        set_date: '',
        date_options: '',
        week: '',
        month: '',
        year: '',
        dates: [],
        range: '',
        range_format: '',
        unlink_panels: '',
        range_picker_option: '',
        range_month: ''
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: this.$t('general.today'),
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: this.$t('general.yesterday'),
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: this.$t('general.a_week_ago'),
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
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

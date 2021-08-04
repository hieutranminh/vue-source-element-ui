<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <!--Time Select & Picker-->
          <div class="row">
            <div class="col-md-6">
              <!--Time select default-->
              <TimeSelect
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time select"
                vid="select_default"
                :label="'Time select'"
                :field="'Time select'"
                :time-value="dataTime.select_default"
                @change="dataTime.select_default = $event" />

              <!--Time select options-->
              <TimeSelect
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time select options"
                vid="select_options"
                :picker-options="{
                  minTime: '09:00',
                  maxTime: '17:00',
                  start: '08:30',
                  step: '00:30',
                  end: '18:30'
                }"
                :label="'Time select options'"
                :field="'Time select options'"
                :time-value="dataTime.select_options"
                @change="dataTime.select_options = $event" />

              <!--Time select prefix icon-->
              <TimeSelect
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time prefix icon"
                vid="prefix_icon"
                prefix-icon="el-icon-s-grid"
                :label="'Time prefix icon'"
                :field="'Time prefix icon'"
                :time-value="dataTime.prefix_icon"
                @change="dataTime.prefix_icon = $event" />

              <!--Time picker default-->
              <TimePicker
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time picker"
                vid="picker_default"
                value-format="HA"
                :label="'Time picker'"
                :field="'Time picker'"
                :time-value="dataTime.picker_default"
                @change="dataTime.picker_default = $event" />
            </div>

            <div class="col-md-6">
              <!--Time picker format-->
              <!--https://element.eleme.io/#/en-US/component/date-picker#date-formats-->
              <TimePicker
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time picker FORMAT"
                value-format="HH:mm:ss"
                vid="picker_format"
                :label="'Time picker FORMAT'"
                :field="'Time picker FORMAT'"
                :time-value="dataTime.picker_format"
                @change="dataTime.picker_format = $event" />

              <!--Time picker options range string-->
              <TimePicker
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Option range string"
                vid="options_range_string"
                value-format="HH:mm:ss"
                :picker-options="{
                  selectableRange: '15:30:00 - 20:30:00'
                }"
                :label="'Option range string'"
                :field="'Option range string'"
                :time-value="dataTime.options_range_string"
                @change="dataTime.options_range_string = $event" />

              <!--Time picker options range array-->
              <TimePicker
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Option range array"
                vid="option_range_array"
                value-format="HH:mm:ss"
                :picker-options="{
                  selectableRange: ['08:30:00 - 10:00:00', '14:30:00 - 18:30:00']
                }"
                :label="'Option range array'"
                :field="'Option range array'"
                :time-value="dataTime.option_range_array"
                @change="dataTime.option_range_array = $event" />

              <!--Time picker arrow control-->
              <TimePicker
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Arrow control"
                vid="arrow_control"
                value-format="HH:mm:ss"
                :arrow-control="true"
                :label="'Arrow control'"
                :field="'Arrow control'"
                :time-value="dataTime.arrow_control"
                @change="dataTime.arrow_control = $event" />
            </div>
          </div>

          <!--Time Select & Picker range-->
          <div class="row">
            <div class="col-md-12">
              <hr>
              <!--Time Range-->
              <h5 class="text-info">
                Time Select & Picker Range
              </h5>

              <!--Time select range default-->
              <TimeSelectRange
                class="mb-3"
                rules="required"
                size="medium"
                :label="'Select time range'"
                :vid-start="'time_start'"
                :vid-end="'time_end'"
                :field-start="'Time start'"
                :field-end="'Time end'"
                :picker-options="{
                  start: '08:30',
                  step: '00:30',
                  end: '18:30'
                }"
                :start-time-value="dataTime.select_range.from"
                :end-time-value="dataTime.select_range.to"
                @startTime="dataTime.select_range.from = $event"
                @endTime="dataTime.select_range.to = $event" />

              <!--Time picker range-->
              <TimePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="picker_range"
                :label="'Time picker range'"
                :field="'Time picker range'"
                @change="dataTime.picker_range = $event" />

              <!--Time picker range format-->
              <TimePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="picker_range_format"
                range-separator="~"
                start-placeholder="From"
                end-placeholder="To"
                value-format="HH:mm:ss"
                :label="'Picker range format'"
                :field="'Picker range format'"
                @change="dataTime.picker_range_format = $event" />

              <!--Time picker range arrow control-->
              <TimePickerRange
                class="mb-3"
                rules="required"
                size="medium"
                vid="range_arrow_control"
                :arrow-control="true"
                :label="'Range arrow control'"
                :field="'Range arrow control'"
                @change="dataTime.range_arrow_control = $event" />
            </div>
          </div>
        </div>

        <!--Object Data-->
        <div class="col-md-4">
          <div class="bg-light d-flex align-items-center h-100">
            <ul style="padding: 15px">
              {
              <li
                v-for="(value, name) in dataTime"
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
import TimeSelect from '@/components/FormElementUI/TimeSelect'
import TimePicker from '@/components/FormElementUI/TimePicker'
import TimeSelectRange from '@/components/FormElementUI/TimeSelectRange'
import TimePickerRange from '@/components/FormElementUI/TimePickerRange'

export default {
  name: 'ElementTimeSelectPicker',

  components: {
    TimePickerRange,
    TimeSelectRange,
    TimePicker,
    TimeSelect
  },

  data () {
    return {
      dataTime: {
        select_default: '',
        select_options: '',
        prefix_icon: '',
        picker_default: '10AM',
        picker_format: '09:30:00',
        options_range_string: '',
        option_range_array: '',
        arrow_control: '',
        select_range: {
          from: '',
          to: ''
        },
        picker_range: [],
        picker_range_format: [],
        range_arrow_control: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

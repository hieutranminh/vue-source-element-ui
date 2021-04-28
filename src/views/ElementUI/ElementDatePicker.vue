<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <!--Time & Date picker-->
          <div class="row">
            <!--Time-->
            <div class="col-md-6">
              <!--Time select default-->
              <TimeSelect
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time select"
                :label="'Time select'"
                :field="'Time select'"
                @change="dataTime.select_default = $event" />

              <!--Time select options-->
              <TimeSelect
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time select options"
                :picker-options="{
                  minTime: '09:00',
                  maxTime: '17:00',
                  start: '08:30',
                  step: '00:30',
                  end: '18:30'
                }"
                :label="'Time select options'"
                :field="'Time select options'"
                @change="dataTime.select_options = $event" />

              <!--Time select prefix icon-->
              <TimeSelect
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time prefix icon"
                prefix-icon="el-icon-s-grid"
                :label="'Time prefix icon'"
                :field="'Time prefix icon'"
                @change="dataTime.prefix_icon = $event" />

              <!--Time picker default-->
              <TimePicker
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time picker"
                :label="'Time picker'"
                :field="'Time picker'"
                @change="dataTime.picker_default = $event" />

              <!--Time picker format-->
              <!--https://element.eleme.io/#/en-US/component/date-picker#date-formats-->
              <TimePicker
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time picker FORMAT"
                value-format="HH:mm:ss - A"
                :label="'Time picker FORMAT'"
                :field="'Time picker FORMAT'"
                @change="dataTime.picker_format = $event" />

              <!--Time picker options range string-->
              <TimePicker
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time range string"
                :picker-options="{
                  selectableRange: '15:30:00 - 20:30:00'
                }"
                :label="'Time range string'"
                :field="'Time range string'"
                @change="dataTime.picker_range_string = $event" />

              <!--Time picker options range array-->
              <TimePicker
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Time range array"
                :picker-options="{
                  selectableRange: ['08:30:00 - 10:00:00', '14:30:00 - 18:30:00']
                }"
                :label="'Time range array'"
                :field="'Time range array'"
                @change="dataTime.picker_range_array = $event" />

              <!--Time picker arrow control-->
              <TimePicker
                class="mb-3"
                rules="required"
                size="medium"
                placeholder="Arrow control"
                :arrow-control="true"
                :label="'Arrow control'"
                :field="'Arrow control'"
                @change="dataTime.arrow_control = $event" />
            </div>

            <!--Date-->
            <div class="col-md-6">
              <!--Date picker default-->
              Date picker
            </div>
          </div>

          <!--Time & Date range-->
          <div class="row">
            <div class="col-md-12">
              <hr>
              Range
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
              <p class="mb-0">
                ------------ Date picker
              </p>
              {
              <li
                v-for="(value, name) in dataDate"
                :key="name+'date'"
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

import TimeSelect from '@/components/Form/TimeSelect'
import TimePicker from '@/components/Form/TimePicker'
export default {
  name: 'ElementDatePicker',

  components: {
    TimePicker,
    TimeSelect
  },

  data () {
    return {
      dataTime: {
        select_default: '',
        select_options: '',
        prefix_icon: '',
        picker_default: '',
        picker_format: '',
        picker_range_string: '',
        picker_range_array: '',
        arrow_control: ''
      },
      dataDate: {
        default: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

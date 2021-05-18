<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <!--Date picker-->
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

              <!--Picker options-->
              Picker options
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
            </div>
          </div>

          <!--Date picker range-->
          <div class="row">
            <div class="col-md-12">
              <hr>
              <!--Time Range-->
              <h5 class="text-info">
                Date Time Picker Range
              </h5>
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

import DatePicker from '@/components/Form/DatePicker'
export default {
  name: 'ElementDateTimePicker',

  components: {
    DatePicker
  },

  data () {
    return {
      dateTimePicker: {
        default: '',
        default_time: '',
        picker_options: '',
        format: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

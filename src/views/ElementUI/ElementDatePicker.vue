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
                :options="true"
                :label="'Date picker option'"
                :field="'Date picker option'"
                @change="datePicker.date_options = $event" />
            </div>

            <div class="col-md-6">
              <!--default-->
              Date Picker
            </div>
          </div>

          <!--Date picker range-->
          <div class="row">
            <div class="col-md-12">
              <hr>
              <!--Time Range-->
              <h5 class="text-info">
                Date Picker Range
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

import DatePicker from '@/components/Form/DatePicker'
export default {
  name: 'ElementDatePicker',

  components: {
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
        dates: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

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
                value-format="DD-MM-yyyy"
                :label="'Date picker format'"
                :field="'Date picker format'"
                @change="datePicker.date_format = $event" />
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

<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <!--Date picker-->
          <div class="row">
            <div class="col-md-6">
              <!--default-->
              Date Time Picker
            </div>

            <div class="col-md-6">
              <!--default-->
              Date Time Picker
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

export default {
  name: 'ElementDateTimePicker',

  components: {
  },

  data () {
    return {
      dateTimePicker: {
        default: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

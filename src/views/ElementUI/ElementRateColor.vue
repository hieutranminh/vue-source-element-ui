<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <!--Rate-->
        <div class="col-md-4">
          Rate
        </div>

        <!--Color picker-->
        <div class="col-md-4">
          Color
        </div>

        <!--Object Data-->
        <div class="col-md-4">
          <div class="bg-light d-flex align-items-center h-100">
            <ul style="padding: 15px">
              {
              <li
                v-for="(value, name) in rate"
                :key="name+'check'"
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
                ------------ Color picker
              </p>
              {
              <li
                v-for="(value, name) in color_picker"
                :key="name+'radio'"
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
  name: 'ElementRateColor',

  data () {
    return {
      rate: {
        default: ''
      },
      color_picker: {
        default: ''
      }
    }
  }
}
</script>

<style scoped>

</style>

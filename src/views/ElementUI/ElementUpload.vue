<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <!--Date picker-->
          <div class="row">
            <div class="col-md-6">
              <!--default-->
              Upload
            </div>

            <div class="col-md-6">
              <!--default-->
              Upload
            </div>
          </div>

          <!--Date picker range-->
          <div class="row">
            <div class="col-md-12">
              <hr>
              <!--Time Range-->
              <h5 class="text-info">
                Upload
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
                v-for="(value, name) in upload"
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
  name: 'ElementUpload',

  components: {
  },

  data () {
    return {
      upload: {
        default: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

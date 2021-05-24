<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-12">
          <!--Default-->
          Form basic
        </div>

        <!--Object Data-->
        <div class="col-md-12 mt-3">
          <div class="bg-light d-flex align-items-center h-100">
            <ul style="padding: 15px">
              {
              <li
                v-for="(value, name) in form"
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
  name: 'BasicForm',

  components: {
  },

  data () {
    return {
      form: {
        default: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

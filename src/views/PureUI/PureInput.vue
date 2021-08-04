<template>
  <div class="card">
    <div class="card-body">
      <!--Input-->
      <div class="row">
        <div class="col-md-4">
          Input
        </div>

        <div class="col-md-4">
          Input
        </div>

        <!--Object Data-->
        <div class="col-md-4">
          <div class="bg-light d-flex align-items-center h-100">
            <ul style="padding: 15px">
              {
              <li
                v-for="(value, name) in input"
                :key="name"
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
  name: 'PureInput',

  components: {
  },

  data () {
    return {
      input: {
        default: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

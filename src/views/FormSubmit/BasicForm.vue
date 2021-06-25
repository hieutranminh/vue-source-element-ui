<template>
  <div class="card">
    <div class="card-body">
      <ValidationObserver
        ref="observer"
        tag="form"
        class="row"
        @submit.prevent="validateBeforeSubmit()">
        <!--Input name-->
        <div class="col-md-6">
          <InputField
            v-model="form.name"
            rules="required"
            vid="name"
            class="mb-3"
            size="medium"
            :placeholder="'Name'"
            :field="'Name'"
            :label="'Name'" />
        </div>

        <!--Upload image-->
        <div class="col-md-6">
          <UploadFile
            vid="upload-default"
            rules="required|image|ext:jpg,png|size:1024"
            class="mb-3"
            :accept="'.png, .jpg, .jpeg'"
            :label="'Upload default'"
            :field="'Upload default'" />
        </div>

        <div class="col-md-12 mt-4">
          <button
            type="submit"
            class="btn btn-pill btn-block btn-success font-weight-bold">
            Handle Validate Before Submit
          </button>
        </div>
      </ValidationObserver>

      <!--Object Data-->
      <div class="row">
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

import UploadFile from '@/components/FormPureUI/UploadFile'
import InputField from '@/components/FormElementUI/InputField'

export default {
  name: 'BasicForm',

  components: {
    InputField,
    UploadFile
  },

  data () {
    return {
      form: {
        name: '',
        image: ''
      }
    }
  },

  methods: {
    async validateBeforeSubmit () {
      const isValid = await this.$refs.observer.validate()

      if (isValid) {
        this.handleSubmit()
      }
    },

    handleSubmit () {
      console.log('Validate before submit success')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-4">
          <!--Upload default-->
          <UploadFile
            class="mb-3"
            rules="required"
            vid="upload_default"
            type-accept="png,jpeg"
            :accept="'.png, .jpg, .jpeg'"
            :max-size="1"
            :label="'Upload default'"
            :field="'Upload default'"
            @onSuccess="upload.default = $event" />

          <!--Upload manual-->
          <UploadFile
            class="mb-3"
            rules="required"
            vid="upload_manual"
            type-accept="png,jpeg"
            :auto-upload="false"
            :accept="'.png, .jpg, .jpeg'"
            :max-size="1"
            :label="'Upload manual'"
            :field="'Upload manual'"
            @onSuccess="upload.default = $event" />
        </div>

        <div class="col-md-4">
          Upload
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

import UploadFile from '@/components/FormElementUI/UploadFile'
export default {
  name: 'ElementUpload',

  components: {
    UploadFile
  },

  data () {
    return {
      upload: {
        default: '',
        manual: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

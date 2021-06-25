<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <!--Default-->
          <UploadFile
            class="mb-3"
            vid="upload_default"
            rules="required|image|ext:jpg,png|size:1024"
            :accept="'.png, .jpg, .jpeg'"
            :label="'Upload default'"
            :field="'Upload default'"
            :delete-button="true"
            @onFileSelect="upload.default = $event" />

          <!--Style 01-->
          <UploadFile01
            class="mb-3"
            vid="upload_style_01"
            rules="required|image|ext:jpg,png|size:1024"
            :accept="'.png, .jpg, .jpeg'"
            :label="'Upload style 01'"
            :field="'Upload style 01'"
            :delete-button="true"
            @onFileSelect="upload.style01 = $event" />
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

import UploadFile from '@/components/FormPureUI/UploadFile'
import UploadFile01 from '@/components/FormPureUI/UploadFile01'

export default {
  name: 'PureUpload',

  components: {
    UploadFile01,
    UploadFile
  },

  data () {
    return {
      upload: {
        default: '',
        style01: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

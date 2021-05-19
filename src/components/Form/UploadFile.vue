<template>
  <ValidationProvider
    v-slot="{ errors }"
    tag="div"
    :name="field"
    :vid="vid"
    :rules="rules">
    <!--Label-->
    <label
      v-if="label"
      class="label">
      {{ label }}

      <span
        v-if="rules.includes('required')"
        class="required"
        v-text="'*'" />
    </label>

    <!--Field-->
    <div
      :class="{'has-error': errors[0]}">
      <!--Upload-->
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :auto-upload="autoUpload"
        :accept="accept"
        :multiple="multiple"
        :on-success="onSuccess"
        :on-error="onError"
        :before-upload="beforeUpload">
        <img
          v-if="imageUrl"
          :src="imageUrl"
          class="avatar">
        <i
          v-else
          class="el-icon-plus avatar-uploader-icon" />
      </el-upload>

      <!--Message Error-->
      <span
        v-if="errors[0]"
        class="errors">
        {{ errors[0] }}
      </span>
    </div>
  </ValidationProvider>
</template>

<script>
import Message from '@/mixins/message.mixin'

export default {
  name: 'UploadFile',

  mixins: [Message],

  props: {
    label: {
      type: String,
      default: ''
    },

    field: {
      type: String,
      default: ''
    },

    rules: {
      type: String,
      default: ''
    },

    vid: {
      type: String,
      default: ''
    },

    typeAccept: {
      type: String,
      default: 'png,jpeg'
    },

    accept: {
      type: String,
      default: ''
    },

    multiple: {
      type: Boolean,
      default: false
    },

    autoUpload: {
      type: Boolean,
      default: true
    },

    maxSize: {
      type: Number,
      default: 2
    }
  },

  data () {
    return {
      imageUrl: ''
    }
  },

  methods: {
    onSuccess (res, file) {
      this.notifySuccess('Upload picture success')

      this.imageUrl = URL.createObjectURL(file.raw)

      this.$emit('onSuccess', res.id)
    },

    onError () {
      this.notifyError('Oops! something went wrong')
    },

    async beforeUpload (file) {
      const isLt2M = file.size / 1024 / 1024 < this.maxSize
      const formatImage = this.typeAccept.includes(file.type.split('/')[1])

      if (!formatImage) {
        await this.notifyWarning('Picture must be JPG/PNG format!')
      }
      if (!isLt2M) {
        await this.notifyWarning(`Picture size can not exceed ${this.maxSize}MB!`)
      }

      return formatImage && isLt2M
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

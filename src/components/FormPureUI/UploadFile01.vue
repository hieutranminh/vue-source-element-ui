<template>
  <ValidationProvider
    ref="provider"
    v-slot="{ errors, validate: {} }"
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
      <div class="upload-image">
        <div class="preview mb-2">
          <!--img-->
          <img
            :src="previewUrl | imageEmpty"
            alt="picture">

          <!--delete-->
          <button
            v-if="deleteButton && previewUrl"
            @click.prevent="handleDeleteFile">
            <i class="far fa-trash-alt" />
          </button>
        </div>

        <input
          :id="vid"
          ref="upload"
          :accept="accept"
          type="file"
          @change="handleFileChange">

        <button
          class="btn btn-primary btn-md btn-block"
          @click.prevent="$refs.upload.click()">
          <i class="fas fa-upload mr-1" />

          {{ $t('general.choose_file') }}
        </button>
      </div>

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
export default {
  name: 'UploadFile01',

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

    accept: {
      type: String,
      default: ''
    },

    deleteButton: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      previewUrl: null
    }
  },

  methods: {
    async handleFileChange (event) {
      const { valid } = await this.$refs.provider.validate(event)

      if (valid) {
        const file = event.target.files[0]
        this.previewUrl = URL.createObjectURL(file)

        const formData = new FormData()
        formData.append('file', file)

        // Call API Upload

        // Emit data outside ( maybe include fileId & fileUrl )
        this.$emit('onFileSelect', this.previewUrl)
      }
    },

    handleDeleteFile () {
      console.log('delete')
    }
  }
}
</script>

<style lang="scss" scoped>
  :root {
    --blue: #007bff;
  }

  .upload-image {
    .preview {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      border: 2px solid var(--blue);
      border-radius: 4px;
      button {
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        border: none;
        background: rgba(0,0,0,.3);
        color: #ffffff;
        outline: none;
        width: 24px;
        height: 24px;
        line-height: 24px;
        padding: 0;
        opacity: 0;
      }
      img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
      &:hover {
        button {
          opacity: 1;
        }
      }
    }
    .btn {
      width: 150px;
    }
    input {
      display: none;
    }
  }
</style>

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
        <div
          v-if="previewUrl"
          class="preview mb-2">
          <!--img-->
          <img
            :src="previewUrl"
            alt="picture">

          <!--delete-->
          <button
            v-if="deleteButton"
            @click.prevent="handleDeleteFile">
            <i class="far fa-trash-alt" />
          </button>
        </div>

        <input
          :id="vid"
          :accept="accept"
          type="file"
          @blur="handleEventBlue"
          @change="handleFileChange">
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
  name: 'UploadFile',

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

    handleEventBlue (event) {
      const target = event.target || event.srcElement
      if (target.value.length === 0) {
        console.log('Suspect Cancel was hit, no files selected.')
      } else {
        console.log('File selected: ', target.value)
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
      width: 100px;
      height: 100px;
      border: 2px solid var(--blue);
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
        width: auto;
        height: auto;
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
  }
</style>

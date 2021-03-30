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
      <!--Select-->
      <el-select
        :multiple="multiple"
        :multiple-limit="multipleLimit"
        :filterable="filterable"
        :collapse-tags="collapseTags"
        :value="value"
        :size="size"
        :placeholder="placeholder"
        :value-key="selectObject ? options.unique : ''"
        @change="handleChange">
        <el-option
          v-for="item in options.list"
          :key="item[options.unique]"
          :label="item[options.label]"
          :value="selectObject ? item : item[options.value]" />
      </el-select>

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
  name: 'SelectMultiple',

  model: {
    prop: 'value',
    event: 'change'
  },

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

    placeholder: {
      type: String,
      default: ''
    },

    options: {
      type: Object,
      required: true
    },

    value: {
      type: Array,
      default: () => []
    },

    size: {
      type: String,
      default: ''
    },

    filterable: {
      type: Boolean,
      default: false
    },

    multiple: {
      type: Boolean,
      default: false
    },

    collapseTags: {
      type: Boolean,
      default: false
    },

    multipleLimit: {
      type: Number,
      default: 0
    },

    selectObject: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleChange (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-select {
    width: 100%;
  }
</style>

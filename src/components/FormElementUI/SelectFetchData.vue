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
        :remote="remote"
        :remote-method="remoteMethod"
        :reserve-keyword="reserveKeyword"
        :filterable="filterable"
        :value="value"
        :size="size"
        :placeholder="placeholder"
        :loading="loading"
        :value-key="selectObject ? options.unique : ''"
        @change="handleChange">
        <el-option
          v-for="item in list"
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
  name: 'SelectFetchData',

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

    size: {
      type: String,
      default: ''
    },

    filterable: {
      type: Boolean,
      default: false
    },

    options: {
      type: Object,
      required: true
    },

    value: {
      type: Array,
      default: () => []
    },

    multiple: {
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
    },

    remote: {
      type: Boolean,
      default: false
    },

    // when multiple and filter is true, whether to
    // reserve current keyword after selecting an option
    reserveKeyword: {
      type: Boolean,
      default: false
    },

    nameActions: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      list: [],
      loading: false
    }
  },

  // SET data receive
  created () {
    this.$store.dispatch(this.nameActions).then((res) => {
      this.list = res
    })
  },

  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true

        this.$store.dispatch(this.nameActions).then((res) => {
          this.loading = false

          this.list = res.filter(item => {
            return item[this.options.label].toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        })
      } else {
        this.list = []
      }
    },

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

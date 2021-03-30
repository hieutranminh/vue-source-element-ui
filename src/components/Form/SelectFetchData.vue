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
        :value-key="options.unique"
        @change="handleChange">
        <el-option
          v-for="item in list"
          :key="item[options.unique]"
          :label="item[options.label]"
          :value="item" />
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

    actionApi: {
      type: [Promise],
      default: () => {}
    }
  },

  data () {
    return {
      value: [],
      list: [],
      loading: false
    }
  },

  // SET data receive
  // mounted () {
  //   this.list = this.states.map(item => {
  //     return { value: `value:${item}`, label: `label:${item}` }
  //   })
  // },

  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true

        this.actionApi.then((res) => {
          this.loading = false

          if (res.status === 200) {
            this.list = res.data
          }
        })
      } else {
        this.list = []
      }
    },

    handleChange (value) {
      console.log('value', value)
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

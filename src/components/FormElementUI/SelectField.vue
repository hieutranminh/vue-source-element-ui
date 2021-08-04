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
        :clearable="clearable"
        :filterable="filterable"
        :value="Object.keys(value).length ? value : undefined"
        :size="size"
        :placeholder="placeholder"
        @change="handleChange">
        <el-option
          v-for="item in options.list"
          :key="item[options.unique]"
          :label="item[options.label]"
          :value="selectObject ? item : item[options.value]"
          :disabled="item[options.disabled]">
          <!--Custom template option-->
          <div
            v-if="customOption"
            :class="typeCustomOption">
            <span
              v-text="item[options.label]" />
            <span
              v-text="item[options.value]" />
          </div>
        </el-option>
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
  name: 'SelectField',

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
      type: [String, Number, Object],
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: ''
    },

    clearable: {
      type: Boolean,
      default: false
    },

    filterable: {
      type: Boolean,
      default: false
    },

    customOption: {
      type: Boolean,
      default: false
    },

    typeCustomOption: {
      type: String,
      default: ''
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

  .default {
    span {
      &:last-child {
        font-size: 13px;
        color: #8492a6;
        margin-left: 10px;
      }
    }
  }

  .space-between {
    display: flex;
    justify-content: space-between;
    span {
      &:last-child {
        font-size: 13px;
        color: #8492a6;
        margin-left: 10px;
      }
    }
  }
</style>

<template>
  <div>
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

    <!--Range-->
    <div class="time-range">
      <ValidationProvider
        v-slot="{ errors }"
        tag="div"
        :name="fieldStart"
        :vid="vidStart"
        :rules="rules">
        <!--Field-->
        <div
          :class="{'has-error': errors[0]}">
          <!--Time select-->
          <el-time-select
            v-model="startTime"
            placeholder="Start Time"
            :picker-options="pickerOptions"
            :size="size"
            @change="chooseStartTime" />

          <!--Message Error-->
          <span
            v-if="errors[0]"
            class="errors">
            {{ errors[0] }}
          </span>
        </div>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        tag="div"
        :name="fieldEnd"
        :vid="vidEnd"
        :rules="rules">
        <!--Field-->
        <div
          :class="{'has-error': errors[0]}">
          <!--Time select-->
          <el-time-select
            v-model="endTime"
            placeholder="End Time"
            :picker-options="{
              ...pickerOptions,
              minTime: startTime
            }"
            :size="size"
            @change="chooseEndTime" />

          <!--Message Error-->
          <span
            v-if="errors[0]"
            class="errors">
            {{ errors[0] }}
          </span>
        </div>
      </ValidationProvider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeSelectRange',

  props: {
    label: {
      type: String,
      default: ''
    },

    rules: {
      type: String,
      default: ''
    },

    fieldStart: {
      type: String,
      default: ''
    },

    fieldEnd: {
      type: String,
      default: ''
    },

    vidStart: {
      type: String,
      default: ''
    },

    vidEnd: {
      type: String,
      default: ''
    },

    startTimeValue: {
      type: String,
      default: ''
    },

    endTimeValue: {
      type: String,
      default: ''
    },

    size: {
      type: String,
      default: ''
    },

    pickerOptions: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      startTime: '',
      endTime: ''
    }
  },

  created () {
    if (this.startTimeValue && this.endTimeValue) {
      this.startTime = this.startTimeValue
      this.endTime = this.endTimeValue
    }
  },

  methods: {
    chooseStartTime (value) {
      const start = Date.parse('01/01/2011 ' + this.startTime)
      const end = Date.parse('01/01/2011 ' + this.endTime)

      if (start >= end) {
        this.endTime = ''

        this.$emit('endTime', '')
      }

      this.$emit('startTime', value)
    },

    chooseEndTime (value) {
      this.$emit('endTime', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-input {
    width: 100%;
  }

  .time-range {
    display: flex;
    justify-content: space-between;
    & > div {
      width: calc((100% - 15px)/2);
    }
  }
</style>

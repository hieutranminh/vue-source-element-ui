<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <!--Checkbox & Switch-->
        <div class="col-md-4">
          <!--Checkbox single bind boolean-->
          <CheckboxField
            v-model="check.bind_boolean"
            class="mb-3"
            :label="'Checkbox bind boolean'"
            :option-name="'Bind boolean'" />

          <!--Checkbox single bind number-->
          <CheckboxField
            v-model="check.bind_number"
            class="mb-3"
            :true-label="1"
            :false-label="0"
            :label="'Checkbox bind number'"
            :option-name="'Bind number'" />

          <!--Checkbox single bind string-->
          <CheckboxField
            v-model="check.bind_string"
            class="mb-3"
            true-label="Yes"
            false-label="No"
            :label="'Checkbox bind string'"
            :option-name="'Bind string'" />

          <!--Checkbox disable-->
          <CheckboxField
            v-model="check.disabled"
            class="mb-3"
            :disabled="true"
            :label="'Checkbox disable'"
            :option-name="'Disabled'" />

          <!--Checkbox style border disable-->
          <CheckboxField
            v-model="check.disabled"
            class="mb-3"
            :label="'Checkbox style border disable'"
            :option-name="'Border disable'"
            :border="true"
            :disabled="true" />

          <!--Checkbox style border (size : medium, small, mini)-->
          <CheckboxField
            v-model="check.border"
            class="mb-3"
            size="medium"
            :label="'Checkbox border (size : medium, small, mini)'"
            :option-name="'Border'"
            :border="true" />

          <!--Checkbox group-->
          <CheckboxGroup
            v-model="check.group"
            rules="required"
            vid="vid"
            class="mb-3"
            :list="LIST_CHECKBOX"
            :field="'Checkbox group default'"
            :label="'Checkbox group default'" />

          <!--Checkbox group max value-->
          <CheckboxGroup
            v-model="check.group_max"
            rules="required"
            vid="vid"
            class="mb-3"
            :max="2"
            :list="LIST_CHECKBOX"
            :field="'Checkbox max value'"
            :label="'Checkbox max value'" />
        </div>

        <!--Radio Button-->
        <div class="col-md-4">
          Radio
        </div>

        <!--Object Data-->
        <div class="col-md-4">
          <div class="bg-light d-flex align-items-center h-100">
            <ul style="padding: 15px">
              {
              <li
                v-for="(value, name) in check"
                :key="name+'check'"
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
              <p class="mb-0">
                ------------
              </p>
              {
              <li
                v-for="(value, name) in radio"
                :key="name+'radio'"
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

import CheckboxField from '@/components/Form/CheckboxField'
import CheckboxGroup from '@/components/Form/CheckboxGroup'
import { LIST_CHECKBOX } from '@/enum/checkbox-options'
export default {
  name: 'ElementCheck',

  components: {
    CheckboxGroup,
    CheckboxField
  },

  data () {
    return {
      LIST_CHECKBOX,
      check: {
        bind_boolean: false,
        bind_number: 0,
        bind_string: '',
        disabled: false,
        border: false,
        group: [],
        group_max: [],
        clearable: ''
      },
      radio: {
        single: '',
        object: {},
        disabled: '',
        clearable: ''
      }
    }
  }
}
</script>

<style scoped>

</style>

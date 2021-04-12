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
            rules="required"
            field="Checkbox Validate"
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
            v-model="check.group_limit"
            rules="required"
            vid="vid"
            class="mb-3"
            :max="2"
            :list="LIST_CHECKBOX"
            :field="'Checkbox max value'"
            :label="'Checkbox max value'" />

          <!--Checkbox button group-->
          <CheckboxButtonGroup
            v-model="check.button_group"
            rules="required"
            vid="vid"
            class="mb-3"
            size="medium"
            :list="LIST_CHECKBOX"
            :field="'Checkbox button'"
            :label="'Checkbox button'" />

          <!--Checkbox button group limit-->
          <CheckboxButtonGroup
            v-model="check.button_group_limit"
            rules="required"
            vid="vid"
            class="mb-3"
            size="medium"
            :max="2"
            :list="LIST_CHECKBOX"
            :field="'Checkbox button limit'"
            :label="'Checkbox button limit'" />

          <!--Checkbox button group disable-->
          <CheckboxButtonGroup
            v-model="check.button_group"
            vid="vid"
            class="mb-3"
            size="medium"
            :disabled="true"
            :list="LIST_CHECKBOX"
            :field="'Checkbox button disable'"
            :label="'Checkbox button disable'" />
        </div>

        <!--Radio Button-->
        <div class="col-md-4">
          <!--Radio group-->
          <RadioGroup
            v-model="radio.default"
            class="mb-3"
            :options="optionsRadio"
            :label="'Radio group'" />

          <!--Radio group disable-->
          <RadioGroup
            v-model="radio.default"
            class="mb-3"
            :disabled="true"
            :options="optionsRadio"
            :label="'Radio group disable'" />

          <!--Radio group style border-->
          <RadioGroup
            v-model="radio.border"
            class="mb-3"
            size="medium"
            :border="true"
            :options="optionsRadio"
            :label="'Radio style border'" />

          <!--Radio button group-->
          <RadioButtonGroup
            v-model="radio.button_group"
            class="mb-3"
            size="medium"
            :options="optionsRadio"
            :label="'Radio button group'" />

          <!--Radio button group disable-->
          <RadioButtonGroup
            v-model="radio.button_group"
            class="mb-3"
            size="medium"
            :disabled="true"
            :options="optionsRadio"
            :label="'Radio button disable '" />

          <hr>

          <!--Switch default-->
          <SwitchField
            v-model="switch_button.bind_boolean"
            class="mb-3"
            :label="'Switch default '" />

          <!--Switch bind number-->
          <SwitchField
            v-model="switch_button.bind_number"
            class="mb-3"
            :active-value="1"
            :inactive-value="0"
            :label="'Switch bind number '" />

          <!--Switch bind string-->
          <SwitchField
            v-model="switch_button.bind_string"
            class="mb-3"
            :active-value="'Yes'"
            :inactive-value="'No'"
            :label="'Switch bind string '" />

          <!--Switch style color-->
          <SwitchField
            v-model="switch_button.style_color"
            class="mb-3"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :label="'Switch style color '" />

          <!--Switch have text-->
          <SwitchField
            v-model="switch_button.have_text"
            class="mb-3"
            :active-text="'Active'"
            :inactive-text="'Inactive'"
            :label="'Switch have text'" />

          <!--Switch disable-->
          <SwitchField
            v-model="switch_button.disable"
            class="mb-3"
            :disabled="true"
            :label="'Switch disable '" />
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
                ------------ Radio
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
              <p class="mb-0">
                ------------ Switch
              </p>
              {
              <li
                v-for="(value, name) in switch_button"
                :key="name+'switch_button'"
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
import CheckboxButtonGroup from '@/components/Form/CheckboxButtonGroup'
import RadioGroup from '@/components/Form/RadioGroup'
import { LIST_CHECKBOX, LIST_RADIO } from '@/enum/options'
import RadioButtonGroup from '@/components/Form/RadioButtonGroup'
import SwitchField from '@/components/Form/SwitchField'
export default {
  name: 'ElementCheck',

  components: {
    SwitchField,
    RadioButtonGroup,
    RadioGroup,
    CheckboxButtonGroup,
    CheckboxGroup,
    CheckboxField
  },

  data () {
    return {
      LIST_CHECKBOX,
      LIST_RADIO,
      check: {
        bind_boolean: false,
        bind_number: 0,
        bind_string: '',
        disabled: false,
        border: false,
        group: [],
        group_limit: [],
        button_group: ['Option A'],
        button_group_limit: ['Option B']
      },
      radio: {
        default: 1,
        border: 1,
        button_group: 'Radio A'
      },
      switch_button: {
        bind_boolean: false,
        bind_number: 0,
        bind_string: '',
        style_color: false,
        have_text: false,
        disable: false
      }
    }
  },

  computed: {
    optionsRadio () {
      return {
        list: LIST_RADIO,
        label: 'name',
        value: 'id',
        unique: 'id'
      }
    }
  }
}
</script>

<style scoped>

</style>

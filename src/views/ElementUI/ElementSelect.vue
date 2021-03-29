<template>
  <div class="card">
    <div class="card-body">
      <!--Select-->
      <div class="row">
        <div class="col-md-4">
          <!--Select default-->
          <SelectField
            v-model="select.default"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :options="optionDefault"
            :placeholder="'Select default'"
            :field="'Select default'"
            :label="'Select default'" />

          <!--Select object-->
          <SelectField
            v-model="select.object"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :options="optionDefault"
            :select-object="true"
            :placeholder="'Select object'"
            :field="'Select object'"
            :label="'Select object'" />

          <!--Select has disabled-->
          <SelectField
            v-model="select.disabled"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :options="optionDefaultDisabled"
            :placeholder="'Select disabled'"
            :field="'Select disabled'"
            :label="'Select disabled'" />

          <!--Select clearable single select-->
          <SelectField
            v-model="select.clearable"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :options="optionDefault"
            :clearable="true"
            :placeholder="'Select clearable'"
            :field="'Select clearable'"
            :label="'Select clearable'" />

          <!--Select custom option default-->
          <SelectField
            v-model="select.custom_default"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            type-custom-option="default"
            :custom-option="true"
            :options="optionDefault"
            :placeholder="'Custom option default'"
            :field="'Custom option default'"
            :label="'Custom option default'" />

          <!--Select custom option space between-->
          <SelectField
            v-model="select.custom_space_between"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            type-custom-option="space-between"
            :custom-option="true"
            :options="optionDefault"
            :placeholder="'Custom option space between'"
            :field="'Custom option space between'"
            :label="'Custom option space between'" />

          <!--Option filtering-->
          <SelectField
            v-model="select.filtering"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :filterable="true"
            :options="optionDefault"
            :placeholder="'Option filtering'"
            :field="'Option filtering'"
            :label="'Option filtering'" />
        </div>

        <div class="col-md-4">
          bbbbbb
        </div>

        <!--Object Data-->
        <div class="col-md-4">
          <div class="bg-light d-flex align-items-center h-100">
            <ul style="padding: 15px">
              {
              <li
                v-for="(value, name) in select"
                :key="name"
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
import { OPTIONS_DEFAULT } from '@/enum/select-options'
import SelectField from '@/components/Form/SelectField'

export default {
  name: 'ElementSelect',
  components: { SelectField },
  data () {
    return {
      select: {
        default: '',
        object: '',
        disabled: '',
        clearable: '',
        custom_default: '',
        custom_space_between: '',
        filtering: ''
      }
    }
  },

  computed: {
    optionDefault () {
      return {
        list: OPTIONS_DEFAULT,
        label: 'title',
        value: 'value'
      }
    },

    optionDefaultDisabled () {
      return {
        list: OPTIONS_DEFAULT,
        label: 'title',
        value: 'value',
        disabled: 'disabled'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

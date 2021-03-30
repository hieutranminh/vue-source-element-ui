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

          <!--Multiple select-->
          <SelectMultiple
            v-model="select.multiple"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :multiple="true"
            :filterable="true"
            :options="optionDefault"
            :placeholder="'Multiple'"
            :field="'Multiple'"
            :label="'Multiple'" />

          <!--Multiple select collapse tags-->
          <SelectMultiple
            v-model="select.multiple_collapse_tags"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :multiple="true"
            :filterable="true"
            :collapse-tags="true"
            :options="optionDefault"
            :placeholder="'Multiple collapse tags'"
            :field="'Multiple collapse tags'"
            :label="'Multiple collapse tags'" />
        </div>

        <div class="col-md-4">
          <!--Multiple select limit-->
          <SelectMultiple
            v-model="select.multiple_limit"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :multiple="true"
            :multiple-limit="2"
            :filterable="true"
            :options="optionDefault"
            :placeholder="'Multiple limit'"
            :field="'Multiple limit'"
            :label="'Multiple limit'" />

          <!--Multiple select object-->
          <SelectMultiple
            v-model="select.multiple_object"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :multiple="true"
            :filterable="true"
            :select-object="true"
            :options="optionDefault"
            :placeholder="'Multiple object'"
            :field="'Multiple object'"
            :label="'Multiple object'" />

          <!--Multiple remote search-->
          <SelectFetchData
            v-model="select.remote_search"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :action-api="getDummy()"
            :options="optionFetchDummy"
            :multiple="true"
            :filterable="true"
            :remote="true"
            :reserve-keyword="true"
            :placeholder="'Multiple remote search'"
            :field="'Multiple remote search'"
            :label="'Multiple remote search'" />
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
import { mapActions } from 'vuex'
import { OPTIONS_DEFAULT } from '@/enum/select-options'
import SelectField from '@/components/Form/SelectField'
import SelectMultiple from '@/components/Form/SelectMultiple'
import SelectFetchData from '@/components/Form/SelectFetchData'

export default {
  name: 'ElementSelect',

  components: {
    SelectFetchData,
    SelectMultiple,
    SelectField
  },

  data () {
    return {
      select: {
        default: '',
        object: {},
        disabled: '',
        clearable: '',
        custom_default: '',
        custom_space_between: '',
        filtering: '',
        multiple: [],
        multiple_collapse_tags: [],
        multiple_limit: [],
        multiple_object: [],
        remote_search: []
      }
    }
  },

  computed: {
    optionDefault () {
      return {
        list: OPTIONS_DEFAULT,
        label: 'title',
        value: 'value',
        unique: 'id'
      }
    },

    optionDefaultDisabled () {
      return {
        list: OPTIONS_DEFAULT,
        label: 'title',
        value: 'value',
        disabled: 'disabled'
      }
    },

    optionFetchDummy () {
      return {
        label: 'username',
        value: 'id',
        unique: 'id'
      }
    }
  },

  methods: {
    ...mapActions('dummy', ['getDummy'])
  }
}
</script>

<style lang="scss" scoped>

</style>

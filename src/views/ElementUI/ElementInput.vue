<template>
  <div class="card">
    <div class="card-body">
      <!--Input Size-->
      <div class="row">
        <div class="col-md-4">
          <!--Default-->
          <InputField
            v-model="input.size_default"
            rules="required"
            vid="vid"
            class="mb-3"
            :placeholder="'Size default'"
            :field="'Size default'"
            :label="'Size default'" />

          <!--Medium-->
          <InputField
            v-model="input.size_medium"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :placeholder="'Size medium'"
            :field="'Size medium'"
            :label="'Size medium'" />

          <!--Small-->
          <InputField
            v-model="input.size_small"
            rules="required"
            vid="vid"
            size="small"
            class="mb-3"
            :placeholder="'Size small'"
            :field="'Size small'"
            :label="'Size small'" />

          <!--Mini-->
          <InputField
            v-model="input.size_mini"
            rules="required"
            vid="vid"
            size="mini"
            class="mb-3"
            :placeholder="'Size mini'"
            :field="'Size mini'"
            :label="'Size mini'" />

          <!--Disabled-->
          <InputField
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :disabled="true"
            :placeholder="'Disabled'"
            :field="'Disabled'"
            :label="'Disabled'" />

          <!--Prefix Icon-->
          <InputField
            v-model="input.prefix_icon"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            prefix-icon="el-icon-user-solid"
            :placeholder="'Prefix icon'"
            :field="'Prefix icon'"
            :label="'Prefix icon'" />

          <!--Suffix Icon-->
          <InputField
            v-model="input.suffix_icon"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            suffix-icon="el-icon-user-solid"
            :placeholder="'Suffix icon'"
            :field="'Suffix icon'"
            :label="'Suffix icon'" />

          <!--Both prefix & suffix Icon-->
          <InputField
            v-model="input.both_icon"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            prefix-icon="el-icon-user-solid"
            suffix-icon="el-icon-user-solid"
            :placeholder="'Both icon'"
            :field="'Both icon'"
            :label="'Both icon'" />
        </div>

        <div class="col-md-4">
          <!--Clearable-->
          <InputField
            v-model="input.clear_input"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :clearable="true"
            :placeholder="'Clearable'"
            :field="'Clearable'"
            :label="'Clearable'" />

          <!--Show password-->
          <InputField
            v-model="input.show_password"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :show-password="true"
            :placeholder="'Show password'"
            :field="'Show password'"
            :label="'Show password'" />

          <!--Limit character-->
          <InputField
            v-model="input.limit_character"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            :max-length="10"
            :show-word-limit="true"
            :placeholder="'Limit character'"
            :field="'Limit character'"
            :label="'Limit character'" />

          <!--Textarea auto size-->
          <InputField
            v-model="input.textarea_autosize"
            type="textarea"
            rules="required"
            vid="vid"
            class="mb-3"
            :autosize="true"
            :placeholder="'Textarea autosize'"
            :field="'Textarea autosize'"
            :label="'Textarea autosize'" />

          <!--Textarea set size-->
          <InputField
            v-model="input.textarea_set_size"
            type="textarea"
            rules="required"
            vid="vid"
            class="mb-3"
            :autosize="{minRows: 3, maxRows: 4}"
            :max-length="150"
            :show-word-limit="true"
            :placeholder="'Textarea set size'"
            :field="'Textarea set size'"
            :label="'Textarea set size'" />

          <!--Mixed prepend-->
          <InputField
            v-model="input.mixed_prepend"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            mixed="prepend"
            :mixed-text="'Prepend'"
            :placeholder="'Mixed prepend'"
            :field="'Mixed prepend'"
            :label="'Mixed prepend'" />

          <!--Mixed append-->
          <InputField
            v-model="input.mixed_append"
            rules="required"
            vid="vid"
            size="medium"
            class="mb-3"
            mixed="append"
            :mixed-text="'Append'"
            :placeholder="'Mixed append'"
            :field="'Mixed append'"
            :label="'Mixed append'" />
        </div>

        <!--Object Data-->
        <div class="col-md-4">
          <div class="bg-light d-flex align-items-center h-100">
            <ul style="padding: 15px">
              {
              <li
                v-for="(value, name) in input"
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

import InputField from '@/components/FormElementUI/InputField'

export default {
  name: 'ElementInput',

  components: {
    InputField
  },

  data () {
    return {
      input: {
        size_default: '',
        size_medium: '',
        size_small: '',
        size_mini: '',
        prefix_icon: '',
        suffix_icon: '',
        both_icon: '',
        clear_input: '',
        show_password: '',
        limit_character: '',
        textarea_autosize: '',
        textarea_set_size: '',
        mixed_prepend: '',
        mixed_append: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

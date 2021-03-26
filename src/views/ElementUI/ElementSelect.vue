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
        default: ''
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <!--Rate-->
        <div class="col-md-4">
          <!--Rate default-->
          <RateField
            v-model="rate.default"
            class="mb-3"
            :label="'Rate default'"
            :field="'Rate default'" />

          <!--Rate disable-->
          <RateField
            v-model="rate.disable"
            class="mb-3"
            disabled-void-color="#d4d4d4"
            :disabled="true"
            :label="'Rate disable'"
            :field="'Rate disable'" />

          <!--Rate different levels-->
          <RateField
            v-model="rate.set_color_level"
            class="mb-3"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            :label="'Different levels'"
            :field="'Different levels'" />

          <!--Rate show text-->
          <RateField
            v-model="rate.set_text"
            class="mb-3"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            :show-text="true"
            :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
            :label="'Show text'"
            :field="'Show text'" />

          <!--Rate with icon-->
          <RateField
            v-model="rate.set_icon"
            class="mb-3"
            void-icon-class="el-icon-remove"
            :icon-classes="['el-icon-remove', 'el-icon-circle-plus', 'el-icon-success']"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            :label="'Rate icon'"
            :field="'Rate icon'" />

          <!--Rate half-->
          <RateField
            v-model="rate.half"
            class="mb-3"
            :allow-half="true"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            :label="'Rate half'"
            :field="'Rate half'" />

          <!--Rate limit-->
          <RateField
            v-model="rate.limit"
            class="mb-3"
            :max="7"
            :label="'Rate limit'"
            :field="'Rate limit'" />
        </div>

        <!--Color picker-->
        <div class="col-md-4">
          <!--Color default-->
          <ColorPickerField
            v-model="color_picker.default"
            class="mb-3"
            :label="'Color picker default'" />

          <!--Color alpha-->
          <ColorPickerField
            v-model="color_picker.alpha"
            class="mb-3"
            :show-alpha="true"
            :label="'Color picker alpha'" />

          <!--Color size-->
          <ColorPickerField
            v-model="color_picker.size"
            class="mb-3"
            size="medium"
            :label="'Size (medium, small, mini)'" />

          <!--Color predefined-->
          <ColorPickerField
            v-model="color_picker.predefined"
            class="mb-3"
            size="medium"
            :predefine-colors="predefineColors"
            :show-alpha="true"
            :label="'Color picker predefined'" />

          <!--Color event active change-->
          <ColorPickerField
            v-model="color_picker.eventName"
            class="mb-3"
            size="medium"
            event-name="active-change"
            :label="'Event active change'" />
        </div>

        <!--Object Data-->
        <div class="col-md-4">
          <div class="bg-light d-flex align-items-center h-100">
            <ul style="padding: 15px">
              {
              <li
                v-for="(value, name) in rate"
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
                ------------ Color picker
              </p>
              {
              <li
                v-for="(value, name) in color_picker"
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

import RateField from '@/components/Form/RateField'
import ColorPickerField from '@/components/Form/ColorPickerField'
export default {
  name: 'ElementRateColor',

  components: {
    ColorPickerField,
    RateField
  },

  data () {
    return {
      rate: {
        default: null,
        disable: null,
        set_color_level: null,
        set_text: null,
        set_icon: null,
        half: null,
        limit: null
      },
      color_picker: {
        default: '#000000',
        alpha: 'rgba(0, 0, 0, 0.5)',
        size: '#000000',
        predefined: 'rgba(255, 69, 0, 0.68)',
        eventName: 'rgb(255, 165, 0)'
      },
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585'
      ]
    }
  }
}
</script>

<style scoped>

</style>

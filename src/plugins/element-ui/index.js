import Vue from 'vue'
import enLocale from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import {
  Button,
  Input,
  Select,
  Option,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'

// configure language
locale.use(enLocale)

// import components
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

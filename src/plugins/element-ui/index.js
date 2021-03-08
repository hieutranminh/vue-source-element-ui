import Vue from 'vue';
import enLocale from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

import {
  Button,
  Input,
  Select,
} from 'element-ui';

// configure language
locale.use(enLocale);

// import components
Vue.use(Button);
Vue.use(Input);
Vue.use(Select);

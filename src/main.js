/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */
import Vue from 'vue'
import App from './App'

/* ============
 * Firebase
 * ============
 */
import './firebase/firebase'

/* ============
 * Plugins
 * ============
 */
import './plugins/vuex'
import { router } from './plugins/vue-router'
import { i18n } from './plugins/i18n'
import './plugins/axios'
import './plugins/register-service-worker'
import './plugins/lazyload'
import './plugins/validation'
import './plugins/admin-lte3'
import './plugins/element-ui'
/* ============
 * Styling
 * ============
 */

import './assets/scss/main.scss'

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */

import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  /**
   * Bind the Vue instance to the HTML.
   */
  el: '#app',

  /**
   * The localization plugin.
   */
  i18n,

  /**
   * The router.
   */
  router,

  /**
   * The Vuex store.
   */
  store,

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: (h) => h(App)
})

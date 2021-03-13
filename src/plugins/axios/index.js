/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue from 'vue'
import Axios from 'axios'
import Cookie from 'js-cookie'

Axios.defaults.baseURL = process.env.VUE_APP_API_LOCATION
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Axios.interceptors.request.use(
  (config) => {
    if (Cookie.get('token')) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${Cookie.get('token')}`
    }

    return config
  }
)

Axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

// Bind Axios to Vue.
Vue.$http = Axios
Object.defineProperty(Vue.prototype, '$http', {
  get () {
    return Axios
  }
})

/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vuex from 'vuex'

// Modules
import dummy from './modules/dummy'
import account from './modules/account'
import auth from './modules/auth'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  /**
   * Assign the modules to the store.
   */
  modules: {
    dummy,
    account,
    auth
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug
})

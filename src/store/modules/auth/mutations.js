/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */
import Cookie from 'js-cookie'
import {
  LOGIN,
  LOGOUT
} from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [LOGIN] (state, payload) {
    // Set state
    state.authenticated = true
    state.token = payload.token
    state.exp_token = payload.exp

    // Set cookie
    Cookie.set('token', payload.token)
    Cookie.set('exp_token', payload.exp)
  },

  [LOGOUT] (state) {
    state.authenticated = false
    state.token = null
    state.exp_token = null

    // Remove cookie
    Cookie.remove('token')
    Cookie.remove('exp_token')
  }
}

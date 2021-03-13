/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { SET_PROFILE } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_PROFILE] (state, payload) {
    state.profile = payload
  }
}

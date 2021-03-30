/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { SET_LIST_DUMMY } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_LIST_DUMMY] (state, payload) {
    state.listDummy = payload
  }
}

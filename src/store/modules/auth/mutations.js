/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import {
  LOGIN,
  LOGOUT,
} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [LOGIN](state) {
    console.log('mudation LOGIN', state);
  },

  [LOGOUT](state) {
    console.log('mudation LOGOUT', state);
  },
};

/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */
import Cookie from 'js-cookie';
import {
  LOGIN,
  LOGOUT,
} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [LOGIN](state, payload) {
    // Set state
    state.authenticated = true;
    state.token = payload.token;
    state.exp_token = payload.exp;

    // Set cookie
    Cookie.set('auth', payload);
  },

  [LOGOUT](state) {
    console.log('mudation LOGOUT', state);
  },
};

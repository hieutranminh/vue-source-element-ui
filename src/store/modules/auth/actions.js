/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */
import {
  login,
} from '@/services/auth.service';
import * as types from './mutation-types';

export default {
  login({ commit }, params) {
    return login(params).then(() => {
      commit(types.LOGIN);
    });
  },

  logout({ commit }) {
    commit(types.LOGOUT);
  },
};

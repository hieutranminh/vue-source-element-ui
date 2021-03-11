/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */
import AuthProxy from '@/proxies/AuthProxy';
import * as types from './mutation-types';

export default {
  login({ commit }, params) {
    return new AuthProxy()
      .login(params)
      .then((res) => {
        commit(types.LOGIN, res);

        return res;
      })
      .catch(() => {
        console.log('Request failed...');
      });
  },

  logout({ commit }) {
    commit(types.LOGOUT);
  },
};

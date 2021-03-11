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
    new AuthProxy()
      .login(params)
      .then((res) => {
        console.log('res proxy', res);
        commit(types.LOGIN);
      })
      .catch(() => {
        console.log('Request failed...');
      });
  },

  logout({ commit }) {
    commit(types.LOGOUT);
  },
};

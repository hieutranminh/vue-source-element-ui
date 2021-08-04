/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */
import * as types from './mutation-types'
import DummyProxy from '@/proxies/DummyProxy'

export default {
  getDummy ({ commit }, params) {
    return new DummyProxy()
      .getOptions()
      .then(res => {
        commit(types.SET_LIST_DUMMY, res)

        return res
      }).catch((err) => {
        return err
      })
  }
}

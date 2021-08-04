/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import AccountProxy from '@/proxies/AccountProxy'
import Transformer from '@/transformers/AccountTransformer'
import * as types from './mutation-types'

export default {
  getProfile ({ commit }, params) {
    return new AccountProxy()
      .setParameters(params)
      .all()
      .then(res => {
        commit(types.SET_PROFILE, Transformer.fetch(res.data))

        return res
      }).catch(() => {
        console.log('Request failed...')
      })
  }
}

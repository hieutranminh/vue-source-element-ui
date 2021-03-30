/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */
import axios from 'axios'
import * as types from './mutation-types'

export default {
  getDummy ({ commit }, params) {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        commit(types.SET_LIST_DUMMY, res.data)

        return res
      }).catch((err) => {
        console.log('Request failed...')
        return err
      })
  }
}

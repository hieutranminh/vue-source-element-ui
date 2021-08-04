/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */
import Cookie from 'js-cookie'

export default {
  authenticated: !!Cookie.get('token'),
  token: null,
  exp_token: null
}

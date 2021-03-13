/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export default {
  authenticated: (state) => state.authenticated,
  token: (state) => state.token,
  exp_token: (state) => state.exp_token
}

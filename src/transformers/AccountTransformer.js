/* ============
 * Account Transformer
 * ============
 *
 * The transformer for the account.
 */

import Transformer from './Transformer'

export default class AccountTransformer extends Transformer {
  /**
   * Method used to transform a fetched account.
   *
   * @param account The fetched account.
   *
   * @returns {Object} The transformed account.
   */
  static fetch (profile) {
    return {
      name: profile.admin_name,
      user_name: profile.login_id,
      company_name: profile.company.company_name
    }
  }

  /**
   * Method used to transform a send account.
   *
   * @param account The account to be send.
   *
   * @returns {Object} The transformed account.
   */
  static send (account) {
    return {
      email: account.email,
      first_name: account.firstName,
      last_name: account.lastName
    }
  }
}

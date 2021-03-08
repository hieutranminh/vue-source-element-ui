/* ============
 * English Language File
 * ============
 *
 * An example language file.
 */

import validationMessagesJapanese from 'vee-validate/dist/locale/ja.json';
import auth from './auth.json';
import general from './general.json';

export default {
  auth,
  general,
  validation: { ...validationMessagesJapanese.messages },
};

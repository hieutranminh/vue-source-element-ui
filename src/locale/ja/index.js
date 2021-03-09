/* ============
 * English Language File
 * ============
 *
 * An example language file.
 */

import validationMessagesJapanese from 'vee-validate/dist/locale/ja.json';
import auth from './auth.json';
import general from './general.json';

// Custom message validate ( add {_field_} to change name field )
const customValidate = {};

export default {
  auth,
  general,
  validation: { ...validationMessagesJapanese.messages, ...customValidate },
};

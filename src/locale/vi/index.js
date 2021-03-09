/* ============
 * English Language File
 * ============
 *
 * An example language file.
 */

import validationMessagesVietnamese from 'vee-validate/dist/locale/vi.json';
import auth from './auth.json';
import general from './general.json';

// Custom message validate ( add {_field_} to change name field )
const customValidate = {};

export default {
  auth,
  general,
  validation: { ...validationMessagesVietnamese.messages, ...customValidate },
};

/* ============
 * English Language File
 * ============
 *
 * An example language file.
 */

import validationMessagesVietnamese from 'vee-validate/dist/locale/vi.json';
import auth from './auth.json';
import general from './general.json';

export default {
  auth,
  general,
  validation: { ...validationMessagesVietnamese.messages },
};

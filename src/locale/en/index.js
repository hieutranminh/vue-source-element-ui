/* ============
 * English Language File
 * ============
 *
 * An example language file.
 */

import validationMessagesEnglish from 'vee-validate/dist/locale/en.json';
import auth from './auth.json';
import general from './general.json';

export default {
  auth,
  general,
  validation: { ...validationMessagesEnglish.messages },
};

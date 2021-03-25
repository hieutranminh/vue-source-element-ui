/* ============
 * English Language File
 * ============
 *
 * An example language file.
 */

import validationMessagesEnglish from 'vee-validate/dist/locale/en.json'
import navigation from './navigation.json'
import breadcrumb from './breadcrumb.json'
import auth from './auth.json'
import general from './general.json'

// Custom message validate ( add {_field_} to change name field )
const customValidate = {}

export default {
  navigation,
  breadcrumb,
  auth,
  general,
  validation: { ...validationMessagesEnglish.messages, ...customValidate }
}

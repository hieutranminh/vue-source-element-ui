// eslint-disable-next-line no-useless-catch
try {
  // eslint-disable-next-line no-multi-assign,global-require
  window.$ = window.jQuery = require('jquery')

  // eslint-disable-next-line global-require
  require('admin-lte')
  // eslint-disable-next-line global-require
  require('admin-lte/docs_html/assets/plugins/bootstrap/js/bootstrap.bundle.min')
} catch (e) { throw e }

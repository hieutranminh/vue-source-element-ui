/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
// import { AuthGuard, LoginGuard, ResolveGuard } from '@/guards'

// MODULE
import ElementUIRoute from './modules/element_ui'
import PureUIRoute from './modules/pure_ui'
import FormSubmitRoute from './modules/form_submit'

export default [
  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/views/Login/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true
    }
    // beforeEnter: ResolveGuard([LoginGuard])
  },

  {
    path: '/',
    component: () => import('@/views/Index'),
    children: [
      // Home
      {
        path: '/home',
        name: 'home.index',
        component: () => import('@/views/Home/Index.vue'),
        meta: {
          title: 'home',
          breadcrumbs: [
            { title: 'home', name: 'home.index' }
          ]
        }
        // beforeEnter: ResolveGuard([AuthGuard])
      },

      // Module
      ...ElementUIRoute,
      ...PureUIRoute,
      ...FormSubmitRoute,

      // Editor
      {
        path: '/editor',
        name: 'editor.index',
        component: () => import('@/views/Editor/Index.vue'),
        meta: {
          title: 'editor',
          breadcrumbs: [
            { title: 'editor', name: 'editor.index' }
          ]
        }
        // beforeEnter: ResolveGuard([AuthGuard])
      },

      // Page not found
      {
        path: '/*',
        redirect: '/home'
      }
    ]
  }
]

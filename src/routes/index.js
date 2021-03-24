/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
import { AuthGuard, LoginGuard, ResolveGuard } from '@/guards'

// MODULE
import ElementUIRoute from './modules/element_ui'

export default [
  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/views/Login/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true
    },
    beforeEnter: ResolveGuard([LoginGuard])
  },

  {
    path: '/',
    redirect: '/home'
  },

  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/views/Home/Index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true
    },
    beforeEnter: ResolveGuard([AuthGuard])
  },

  // Module
  ...ElementUIRoute,

  // Editor
  {
    path: '/editor',
    name: 'editor.index',
    component: () => import('@/views/Editor/Index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true
    },
    beforeEnter: ResolveGuard([AuthGuard])
  },

  // Page not found
  {
    path: '/*',
    redirect: '/home'
  }
]

/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
import { AuthGuard, LoginGuard, ResolveGuard } from '@/guards'

export default [
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

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: () => import('@/views/Account/Index.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true
    },
    beforeEnter: ResolveGuard([AuthGuard])
  },

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

  // Page not found
  {
    path: '/*',
    redirect: '/home'
  }
]

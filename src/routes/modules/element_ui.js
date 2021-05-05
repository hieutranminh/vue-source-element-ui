import { AuthGuard, ResolveGuard } from '@/guards'

export default [
  {
    path: '/el_ui/input',
    name: 'el_ui.input',
    component: () => import('@/views/ElementUI/ElementInput'),
    meta: {
      title: 'el_input',
      breadcrumbs: [
        { title: 'el_input', name: 'el_ui.input' }
      ]
    },
    beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/el_ui/select',
    name: 'el_ui.select',
    component: () => import('@/views/ElementUI/ElementSelect'),
    meta: {
      title: 'el_select',
      breadcrumbs: [
        { title: 'el_select', name: 'el_ui.select' }
      ]
    },
    beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/el_ui/check',
    name: 'el_ui.check',
    component: () => import('@/views/ElementUI/ElementCheck'),
    meta: {
      title: 'el_check',
      breadcrumbs: [
        { title: 'el_check', name: 'el_ui.check' }
      ]
    },
    beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/el_ui/rate',
    name: 'el_ui.rate',
    component: () => import('@/views/ElementUI/ElementRateColor'),
    meta: {
      title: 'el_rate',
      breadcrumbs: [
        { title: 'el_rate', name: 'el_ui.rate' }
      ]
    },
    beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/el_ui/time_select_picker',
    name: 'el_ui.time_select_picker',
    component: () => import('@/views/ElementUI/ElementTimeSelectPicker'),
    meta: {
      title: 'el_time_select_picker',
      breadcrumbs: [
        { title: 'el_time_select_picker', name: 'el_ui.time_select_picker' }
      ]
    },
    beforeEnter: ResolveGuard([AuthGuard])
  }
]

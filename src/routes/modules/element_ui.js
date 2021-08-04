// import { AuthGuard, ResolveGuard } from '@/guards'

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
    }
    // beforeEnter: ResolveGuard([AuthGuard])
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
    }
    // beforeEnter: ResolveGuard([AuthGuard])
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
    }
    // beforeEnter: ResolveGuard([AuthGuard])
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
    }
    // beforeEnter: ResolveGuard([AuthGuard])
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
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/el_ui/date_picker',
    name: 'el_ui.date_picker',
    component: () => import('@/views/ElementUI/ElementDatePicker'),
    meta: {
      title: 'el_date_picker',
      breadcrumbs: [
        { title: 'el_date_picker', name: 'el_ui.date_picker' }
      ]
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/el_ui/date_time_picker',
    name: 'el_ui.date_time_picker',
    component: () => import('@/views/ElementUI/ElementDateTimePicker'),
    meta: {
      title: 'el_date_time_picker',
      breadcrumbs: [
        { title: 'el_date_time_picker', name: 'el_ui.date_time_picker' }
      ]
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/el_ui/upload',
    name: 'el_ui.upload',
    component: () => import('@/views/ElementUI/ElementUpload'),
    meta: {
      title: 'el_upload',
      breadcrumbs: [
        { title: 'el_upload', name: 'el_ui.upload' }
      ]
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/el_ui/table',
    name: 'el_ui.table',
    component: () => import('@/views/ElementUI/ElementTable'),
    meta: {
      title: 'el_table',
      breadcrumbs: [
        { title: 'el_table', name: 'el_ui.table' }
      ]
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  }
]

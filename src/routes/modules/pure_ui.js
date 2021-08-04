// import { AuthGuard, ResolveGuard } from '@/guards'

export default [
  {
    path: '/pure_ui/input',
    name: 'pure_ui.input',
    component: () => import('@/views/PureUI/PureInput'),
    meta: {
      title: 'pure_input',
      breadcrumbs: [
        { title: 'pure_input', name: 'pure_ui.input' }
      ]
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/pure_ui/select',
    name: 'pure_ui.select',
    component: () => import('@/views/PureUI/PureSelect'),
    meta: {
      title: 'pure_select',
      breadcrumbs: [
        { title: 'pure_select', name: 'pure_ui.select' }
      ]
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/pure_ui/check',
    name: 'pure_ui.check',
    component: () => import('@/views/PureUI/PureCheck'),
    meta: {
      title: 'pure_check',
      breadcrumbs: [
        { title: 'pure_check', name: 'pure_ui.check' }
      ]
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/pure_ui/date_picker',
    name: 'pure_ui.date_picker',
    component: () => import('@/views/PureUI/PureDatePicker'),
    meta: {
      title: 'pure_date_picker',
      breadcrumbs: [
        { title: 'pure_date_picker', name: 'pure_ui.date_picker' }
      ]
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/pure_ui/upload',
    name: 'pure_ui.upload',
    component: () => import('@/views/PureUI/PureUpload'),
    meta: {
      title: 'pure_upload',
      breadcrumbs: [
        { title: 'pure_upload', name: 'pure_ui.upload' }
      ]
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/pure_ui/table',
    name: 'pure_ui.table',
    component: () => import('@/views/PureUI/PureTable'),
    meta: {
      title: 'pure_table',
      breadcrumbs: [
        { title: 'pure_table', name: 'pure_ui.table' }
      ]
    }
    // beforeEnter: ResolveGuard([AuthGuard])
  }
]

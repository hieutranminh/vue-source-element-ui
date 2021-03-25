import { AuthGuard, ResolveGuard } from '@/guards'

export default [
  {
    path: '/el_ui',
    component: () => import('@/views/ElementUI/Index'),
    children: [
      {
        path: '/el_ui/input',
        name: 'el_ui.input',
        component: () => import('@/views/ElementUI/ElementInput'),
        meta: {
          auth: true
        },
        beforeEnter: ResolveGuard([AuthGuard])
      },
      {
        path: '/el_ui/select',
        name: 'el_ui.select',
        component: () => import('@/views/ElementUI/ElementSelect'),
        meta: {
          auth: true
        },
        beforeEnter: ResolveGuard([AuthGuard])
      },
      {
        path: '/el_ui/check',
        name: 'el_ui.check',
        component: () => import('@/views/ElementUI/ElementCheck'),
        meta: {
          auth: true
        },
        beforeEnter: ResolveGuard([AuthGuard])
      },
      {
        path: '/el_ui/date_picker',
        name: 'el_ui.date_picker',
        component: () => import('@/views/ElementUI/ElementDatePicker'),
        meta: {
          auth: true
        },
        beforeEnter: ResolveGuard([AuthGuard])
      }
    ]
  }
]

import { AuthGuard, ResolveGuard } from '@/guards'

export default [
  {
    path: '/element_ui',
    component: () => import('@/views/ElementUI/Index'),
    children: [
      {
        path: '/element_ui/input',
        name: 'element_ui.input',
        component: () => import('@/views/ElementUI/ElementInput'),
        meta: {
          auth: true
        },
        beforeEnter: ResolveGuard([AuthGuard])
      }
    ]
  }
]

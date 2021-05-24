import { AuthGuard, ResolveGuard } from '@/guards'

export default [
  {
    path: '/form_submit/basic',
    name: 'form_submit.basic',
    component: () => import('@/views/FormSubmit/BasicForm'),
    meta: {
      title: 'form_basic',
      breadcrumbs: [
        { title: 'form_basic', name: 'form_submit.basic' }
      ]
    },
    beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/form_submit/nested_once',
    name: 'form_submit.nested_once',
    component: () => import('@/views/FormSubmit/NestedOnceForm'),
    meta: {
      title: 'form_nested_once',
      breadcrumbs: [
        { title: 'form_nested_once', name: 'form_submit.nested_once' }
      ]
    },
    beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/form_submit/nested_twice',
    name: 'form_submit.nested_twice',
    component: () => import('@/views/FormSubmit/NestedTwiceForm'),
    meta: {
      title: 'form_nested_twice',
      breadcrumbs: [
        { title: 'form_nested_twice', name: 'form_submit.nested_twice' }
      ]
    },
    beforeEnter: ResolveGuard([AuthGuard])
  },
  {
    path: '/form_submit/tabs_form',
    name: 'form_submit.tabs_form',
    component: () => import('@/views/FormSubmit/TabsForm'),
    meta: {
      title: 'tabs_form',
      breadcrumbs: [
        { title: 'tabs_form', name: 'form_submit.tabs_form' }
      ]
    },
    beforeEnter: ResolveGuard([AuthGuard])
  }
]

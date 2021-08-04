import store from '@/store'

// eslint-disable-next-line import/prefer-default-export
export const LoginGuard = (to, from, next) => {
  if (store.state.auth.authenticated) {
    next({ name: 'home.index' })

    return
  }
  next()
}

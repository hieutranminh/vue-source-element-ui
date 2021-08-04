// import store from '@/store'

// eslint-disable-next-line import/prefer-default-export
export const AuthGuard = async (to, from, next) => {
  // if (!store.state.auth.authenticated) {
  //   next({ name: 'login.index' })
  //
  //   return
  // }
  //
  // if (!store.state.account.profile) {
  //   const query = {
  //     include: 'company'
  //   }
  //
  //   store.dispatch('account/getProfile', query).then(() => {
  //     next()
  //   })
  // } else {
  //   next()
  // }
  next()
}

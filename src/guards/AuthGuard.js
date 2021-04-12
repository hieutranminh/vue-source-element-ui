import firebase from 'firebase/app'

export const AuthGuard = async (to, from, next) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      next()
    } else {
      next({ name: 'login.index' })
    }
  })
}

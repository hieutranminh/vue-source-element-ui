import firebase from 'firebase/app'

export const LoginGuard = (to, from, next) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      next({ name: 'home.index' })
    } else {
      next()
    }
  })
}

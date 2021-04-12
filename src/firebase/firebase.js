import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBZinCIZfIfWXw3yesz0gq8hkV2t2B7pcc',
  authDomain: 'project-vue-elementui.firebaseapp.com',
  projectId: 'project-vue-elementui',
  storageBucket: 'project-vue-elementui.appspot.com',
  messagingSenderId: '543887255865',
  appId: '1:543887255865:web:86f57689e766e3b1d820e8',
  measurementId: 'G-9YV23Y4KZC'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

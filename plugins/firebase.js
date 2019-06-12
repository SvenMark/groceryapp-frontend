import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/database'

// firebase init goes here
const config = {
  apiKey: "AIzaSyC0K2bhGTcgPEJYpVWaL8TNR-jQ-Q2FHDc",
  authDomain: "groceryapp-426fb.firebaseapp.com",
  databaseURL: "https://groceryapp-426fb.firebaseio.com",
  projectId: "groceryapp-426fb",
  storageBucket: "groceryapp-426fb.appspot.com",
  messagingSenderId: "254216049634",
  appId: "1:254216049634:web:383b619d9b9b205d"
};
!firebase.apps.length ? firebase.initializeApp(config) : '';

// firebase utils
const auth = firebase.auth();

export default (ctx, inject) => {
  inject('auth', auth);
}

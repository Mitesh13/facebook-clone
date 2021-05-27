import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAL0gNRlnQYNaELQk6BRf5w4KjGS5noIGo",
    authDomain: "facebook-clone-13.firebaseapp.com",
    projectId: "facebook-clone-13",
    storageBucket: "facebook-clone-13.appspot.com",
    messagingSenderId: "213377868275",
    appId: "1:213377868275:web:45d0142da1a626e3c9b286",
    measurementId: "G-STR5K5KVXE"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};
export default firebase
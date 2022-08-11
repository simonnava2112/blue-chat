import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCxH-PFfyMgqRWAU-9BwolU4V8No50F1I4",
    authDomain: "simchat-21.firebaseapp.com",
    projectId: "simchat-21",
    storageBucket: "simchat-21.appspot.com",
    messagingSenderId: "767035406974",
    appId: "1:767035406974:web:cc2523f07763d43ee5762f"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider};




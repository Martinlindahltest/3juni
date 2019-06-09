import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDLsSowO8kZBEWQIixq6eLr3voNBU7Mjr4",
    authDomain: "bb0513-5fa4c.firebaseapp.com",
    databaseURL: "https://bb0513-5fa4c.firebaseio.com",
    projectId: "bb0513-5fa4c",
    storageBucket: "bb0513-5fa4c.appspot.com",
    messagingSenderId: "831574817574",
    appId: "1:831574817574:web:49c714875be8c148"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })



export default firebase
 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBULlArFNMapX7RGaaZGQM4wJFv0lkL3rQ",
    authDomain: "delta-typing-test.firebaseapp.com",
    projectId: 'delta-typing-test',
    storageBucket: "delta-typing-test.appspot.com",
    messagingSenderId: "474897928170",
    appId: "1:474897928170:web:82001e4aa15fca972a6c93",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth  = firebase.auth();
const db = firebase.firestore();

export {auth,db};
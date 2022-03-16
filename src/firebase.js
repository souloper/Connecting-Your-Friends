import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth =  firebase.initializeApp({
  apiKey: "AIzaSyDzWpZblXy7OJuDpH4ga7dNIftuKapoJ6k",
  authDomain: "connectingyourfriends.firebaseapp.com",
  projectId: "connectingyourfriends",
  storageBucket: "connectingyourfriends.appspot.com",
  messagingSenderId: "880052811497",
  appId: "1:880052811497:web:29d4035ab7abd4b08b2278",
}).auth();

export default firebase;
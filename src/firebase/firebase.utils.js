import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Q0jF59eM3Z_xeFKkeQ64rvjQZ7TGlvI",
  authDomain: "clone-b0ab1.firebaseapp.com",
  databaseURL: "https://clone-b0ab1.firebaseio.com",
  projectId: "clone-b0ab1",
  storageBucket: "clone-b0ab1.appspot.com",
  messagingSenderId: "668690672436",
  appId: "1:668690672436:web:a49ce7cf0b8288b9a61361",
  measurementId: "G-WSLEJDW31F",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

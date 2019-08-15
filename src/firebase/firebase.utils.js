import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD15TBfXMQSWiJJF8FaOO86fNPJRhI4VRA",
  authDomain: "e-commercial-7657f.firebaseapp.com",
  databaseURL: "https://e-commercial-7657f.firebaseio.com",
  projectId: "e-commercial-7657f",
  storageBucket: "",
  messagingSenderId: "526217132567",
  appId: "1:526217132567:web:7d0a0794727916af"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

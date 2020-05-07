import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpBGLHsAsLsvdT3OW-iUjtvA0DqQABWv4",
  authDomain: "origin-a386e.firebaseapp.com",
  databaseURL: "https://origin-a386e.firebaseio.com",
  projectId: "origin-a386e",
  storageBucket: "origin-a386e.appspot.com",
  messagingSenderId: "689507646796",
  appId: "1:689507646796:web:2f9f59b3465d58c91ce3e9",
  measurementId: "G-8JFDFD2E9K"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); 
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export function signInWithGoogle() {
  auth.signInWithPopup(provider);
};

export default auth;

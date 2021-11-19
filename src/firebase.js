import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBn3d8DEg0WRQnqUgiyVNkVCBBCa082Px4",
  authDomain: "linkedin-clone-7425d.firebaseapp.com",
  projectId: "linkedin-clone-7425d",
  storageBucket: "linkedin-clone-7425d.appspot.com",
  messagingSenderId: "25972828722",
  appId: "1:25972828722:web:8478cd3c40c3c06c1daa2b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

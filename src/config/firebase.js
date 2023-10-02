import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAaCf59G06D656j5Vyg1CQQJUb4J6rxzs0",
  authDomain: "hng-project-96085.firebaseapp.com",
  databaseURL: "https://hng-project-96085-default-rtdb.firebaseio.com",
  projectId: "hng-project-96085",
  storageBucket: "hng-project-96085.appspot.com",
  messagingSenderId: "532587848915",
  appId: "1:532587848915:web:84c298cf785911a8a56026",
  measurementId: "G-ST0LKNGMPJ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export { auth, googleProvider };

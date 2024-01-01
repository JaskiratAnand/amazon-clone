import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDTlVBMPxSizPIVkbOgQXR7ZL6I2WnCPCc",
  authDomain: "clone-afc2f.firebaseapp.com",
  projectId: "clone-afc2f",
  storageBucket: "clone-afc2f.appspot.com",
  messagingSenderId: "351436460144",
  appId: "1:351436460144:web:2b06c40b222042937c64b5",
  measurementId: "G-WR1PB254EN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
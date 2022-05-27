import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDgNfbURTv7g0EZINZDBZx4urGn73QFoBU",
  authDomain: "onboarding-409d7.firebaseapp.com",
  projectId: "onboarding-409d7",
  storageBucket: "onboarding-409d7.appspot.com",
  messagingSenderId: "705287224818",
  appId: "1:705287224818:web:8b64f75f88ea8eb5eaff6b",
  measurementId: "G-L05E94PCZH"
};

firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth;
// export const db = firebase.database;
export default firebase;
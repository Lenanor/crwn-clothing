import firebase from "firebase/app";
import "firebase/firestore"; // database
import "firebase/auth"; //authentication

const config = {
  apiKey: "AIzaSyDhrN44Wodmdjylwi6Xc3xtk0I6HJeRFM4",
  authDomain: "crwn-db-e6a80.firebaseapp.com",
  databaseURL: "https://crwn-db-e6a80.firebaseio.com",
  projectId: "crwn-db-e6a80",
  storageBucket: "",
  messagingSenderId: "97104911202",
  appId: "1:97104911202:web:fb175535e97a14ca"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Set up Google authentication utilities
const provider = new firebase.auth.GoogleAuthProvider();
//Trigger to google pop-up
provider.setCustomParameters({ prompt: "select_account" });
// Choose just the sign in popup for Google (there are many)
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

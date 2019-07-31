import firebase from "firebase/app";
import "firebase/firestore"; // database
import "firebase/auth"; //authentication

const config = {
  apiKey: "AIzaSyC0fPLjOIODK95Jwb9U-WvteEt0AtsR1j0",
  authDomain: "crwn-db2-a5367.firebaseapp.com",
  databaseURL: "https://crwn-db2-a5367.firebaseio.com",
  projectId: "crwn-db2-a5367",
  storageBucket: "",
  messagingSenderId: "499899987758",
  appId: "1:499899987758:web:df4b9ee8feb514ac"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // Get the DocumentReference object for the logged in user.
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Get the documentSnapshot object (it might not exist any data on it,
  //Firestore returns it anyway)
  const snapShot = await userRef.get();

  // Check if any data exist in snapShot, if it doesn't, set the userRef document
  // with data from the userAuth object
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Google authentication utility. To trigger pop-up window
// with google-accounts
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

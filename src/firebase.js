import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlIz9i868ttv5Kb4W-eZsHGjIC2T8qqGg",
  authDomain: "tutienda-53fbc.firebaseapp.com",
  projectId: "tutienda-53fbc",
  storageBucket: "tutienda-53fbc.appspot.com",
  messagingSenderId: "843626491590",
  appId: "1:843626491590:web:24a3d578bbcfcb745af1c7"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);
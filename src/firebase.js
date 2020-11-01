import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARrsXx2RL2dTXY1ydTKXbr9OdLsYZQQ5E",
  authDomain: "autocity-9c2f1.firebaseapp.com",
  databaseURL: "https://autocity-9c2f1.firebaseio.com",
  projectId: "autocity-9c2f1",
  storageBucket: "autocity-9c2f1.appspot.com",
  messagingSenderId: "471380271418",
  appId: "1:471380271418:web:4321bb4bbd2c03b367b003"
};
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  
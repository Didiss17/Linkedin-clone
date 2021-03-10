import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCxoznkNW9utg1RkEbZpsIVmzXyvJ5VLxY",
  authDomain: "linkedin-clone-3w.firebaseapp.com",
  projectId: "linkedin-clone-3w",
  storageBucket: "linkedin-clone-3w.appspot.com",
  messagingSenderId: "635779992838",
  appId: "1:635779992838:web:ee72df616fbf9c9e6fe287",
  measurementId: "G-2DCF3THC90",
  databaseURL: "https://linkedin-clone-3w-default-rtdb.firebaseio.com/",


};

const firebasApp = firebase.initializeApp(firebaseConfig);
const db = firebasApp.firestore();
const auth = firebase.auth();

export { db, auth };

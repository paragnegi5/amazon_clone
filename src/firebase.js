
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyC0uy-YeXr0-ATFxmWIQH0JkIskE4_DddI",
  authDomain: "clone-83371.firebaseapp.com",
  projectId: "clone-83371",
  storageBucket: "clone-83371.appspot.com",
  messagingSenderId: "448897247066",
  appId: "1:448897247066:web:1f9c47d8a4a83dd225f563",
  measurementId: "G-8F1TKL9HMS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};

// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Connect only storage to emulator when in development
if (process.env.NODE_ENV === 'development') {
  connectStorageEmulator(storage, 'localhost', 9199);
}

export { auth, db, storage };









// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyBz2d-ecAREwJvGs2fcaiB7k13zH4xNiCY",
//   authDomain: "devresolve-86553.firebaseapp.com",
//   projectId: "devresolve-86553",
//   storageBucket: "devresolve-86553.appspot.com",
//   messagingSenderId: "972275050727",
//   appId: "1:972275050727:web:58c55289774bd1f0879a42"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export const googleProvider = new GoogleAuthProvider();
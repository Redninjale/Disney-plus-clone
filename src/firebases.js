import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDnlOrcSEIshMv8tBG5RAu8XJRKlFAN-PQ",
  authDomain: "disneyplus-clone-e5bd9.firebaseapp.com",
  projectId: "disneyplus-clone-e5bd9",
  storageBucket: "disneyplus-clone-e5bd9.appspot.com",
  messagingSenderId: "746759518094",
  appId: "1:746759518094:web:cad400d8be994ff83a16df",
  measurementId: "G-QX1TJQNTRQ"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDW8qSpF2PmkPjiIGk5QNAL6f5hDsDhUM0",
  authDomain: "gospelproject-115be.firebaseapp.com",
  projectId: "gospelproject-115be",
  storageBucket: "gospelproject-115be.appspot.com",
  messagingSenderId: "761900992840",
  appId: "1:761900992840:web:d14f3bde009cf63b31cb7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const data = getFirestore(app)
export const auth = getAuth(app)
export const storage= getStorage(app)
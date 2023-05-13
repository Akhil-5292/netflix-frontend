
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9R_7WEZ0Fw6JM_vWUuU7TDxYWElbR9XM",
  authDomain: "netflix-clone-1f511.firebaseapp.com",
  projectId: "netflix-clone-1f511",
  storageBucket: "netflix-clone-1f511.appspot.com",
  messagingSenderId: "457453530121",
  appId: "1:457453530121:web:2f7406f37879ccdd701cd8",
  measurementId: "G-1X7LN48M98"
};


const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)




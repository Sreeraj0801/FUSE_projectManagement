import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBZC2sMWXB6QMq0LmyiDjm2hfnbweWOirY",
  authDomain: "fuse-a2ec3.firebaseapp.com",
  projectId: "fuse-a2ec3",
  storageBucket: "fuse-a2ec3.appspot.com",
  messagingSenderId: "1044896450525",
  appId: "1:1044896450525:web:460519106a5b2d9398d834",
  measurementId: "G-8L3182E1L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
export default app;
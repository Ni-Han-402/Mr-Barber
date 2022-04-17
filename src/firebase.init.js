// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZYdoJB4YnTc6WT3xf3qJJXF8IvTUzsKY",
  authDomain: "mr-barber-752df.firebaseapp.com",
  projectId: "mr-barber-752df",
  storageBucket: "mr-barber-752df.appspot.com",
  messagingSenderId: "1094235182131",
  appId: "1:1094235182131:web:182e66575236151fdfff46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app;
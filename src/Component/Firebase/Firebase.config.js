// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClXrmLIu0A9BZan4pVarKCvWbAxTgT8rY",
  authDomain: "booklet-a048e.firebaseapp.com",
  projectId: "booklet-a048e",
  storageBucket: "booklet-a048e.appspot.com",
  messagingSenderId: "327121874801",
  appId: "1:327121874801:web:8c3739cc0ba66075bd90d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
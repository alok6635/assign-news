import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCplv5vqb7lLDsmeFxyuqFv_ngpLfYs2Mg",
  authDomain: "news-app-firebase-519fd.firebaseapp.com",
  projectId: "news-app-firebase-519fd",
  storageBucket: "news-app-firebase-519fd.appspot.com",
  messagingSenderId: "231512902306",
  appId: "1:231512902306:web:a0804ac82d04a0fce3a5fb",
  measurementId: "G-98Q66LRCEY"
};


 const app = initializeApp(firebaseConfig);
 const auth= getAuth();

 export {app,auth};
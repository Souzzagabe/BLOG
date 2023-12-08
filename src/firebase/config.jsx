// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMmED2y39Xx1r2DmMd6el3WxosioNqo58",
  authDomain: "blog-f3bbb.firebaseapp.com",
  projectId: "blog-f3bbb",
  storageBucket: "blog-f3bbb.appspot.com",
  messagingSenderId: "856467772988",
  appId: "1:856467772988:web:0c3ca2a7f931d4d50dd539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}
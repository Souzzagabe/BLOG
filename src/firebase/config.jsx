import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMmED2y39Xx1r2DmMd6el3WxosioNqo58",
  authDomain: "blog-f3bbb.firebaseapp.com",
  projectId: "blog-f3bbb",
  storageBucket: "blog-f3bbb.appspot.com",
  messagingSenderId: "856467772988",
  appId: "1:856467772988:web:0c3ca2a7f931d4d50dd539"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}
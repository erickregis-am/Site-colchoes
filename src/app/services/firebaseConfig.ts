import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBr6qFI3bRf7gBFYT7ZWTYZ3qpXQo2paAA",
  authDomain: "site-colchonetes.firebaseapp.com",
  databaseURL: "https://site-colchonetes-default-rtdb.firebaseio.com/",
  projectId: "site-colchonetes",
  storageBucket: "site-colchonetes.appspot.com",
  messagingSenderId: "307279282054",
  appId: "1:307279282054:web:4a2e638468a98d4116f607"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
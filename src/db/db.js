import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCd0j6hDHwYR7NNHhq96LyqBx3PI6ZfBgI",
  authDomain: "ecommerce-rios.firebaseapp.com",
  projectId: "ecommerce-rios",
  storageBucket: "ecommerce-rios.firebasestorage.app",
  messagingSenderId: "504960366309",
  appId: "1:504960366309:web:1c165b24a4707db44b060c"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;

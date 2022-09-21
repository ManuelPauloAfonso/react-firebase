
import { initializeApp } from 'firebase/app';
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBh6a5nnXuScCej_Vi-ewnQ0qi3vovrE-8",

  authDomain: "crud-firebase-ec552.firebaseapp.com",

  projectId: "crud-firebase-ec552",

  storageBucket: "crud-firebase-ec552.appspot.com",

  messagingSenderId: "310146983105",

  appId: "1:310146983105:web:3ef056f162b38cae24e040",

  measurementId: "G-J7QGRCF5KS"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {app, db}
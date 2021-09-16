// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getDoc, where, query, doc, getFirestore, setDoc} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8xB67Trg9xQVVaAZjMsP81nK2_4sn48s",
  authDomain: "leadmusicdb.firebaseapp.com",
  projectId: "leadmusicdb",
  storageBucket: "leadmusicdb.appspot.com",
  messagingSenderId: "321549487385",
  appId: "1:321549487385:web:f31f1a80f2c9cbadad4988"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const cn = getFirestore();

export const list = ()  => {
  const list = getDocs(collection(cn, "productos"));
  return list
};

export const listCate = (cate)  => {  
  const sqlconnect = collection(cn, "productos");
  const querydb = query(sqlconnect, where('cate', '==', cate) ); 
  const row = getDocs(querydb);
  return row
};

export const rowProduct = (id) => {
  const sqlconnect = doc(cn, 'productos', id);
  const row = getDoc(sqlconnect);
  return row
}

export const guardoBuyer = async (nameDB, obj) => {
  const id = doc(collection(cn, nameDB));
  await setDoc(id, obj);
  return id;
}
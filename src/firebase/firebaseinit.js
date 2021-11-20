import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseconfig";
const firebaseInitapp=()=>{
    initializeApp(firebaseConfig)
}
export default firebaseInitapp;

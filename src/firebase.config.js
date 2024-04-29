// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7-cu5bFK9DvPYMsCx4e2nK8p72QUVlIc",
  authDomain: "jobadda-62fa4.firebaseapp.com",
  projectId: "jobadda-62fa4",
  storageBucket: "jobadda-62fa4.appspot.com",
  messagingSenderId: "897859742170",
  appId: "1:897859742170:web:ab9705137766c6a407b8e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
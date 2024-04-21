import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage,ref } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration.
  const firebaseConfig = {
    apiKey: "AIzaSyA3K6Nhak5krGBXV28jaSeRna4kJncLJzY",
    authDomain: "gecbh-cl.firebaseapp.com",
    databaseURL: "https://gecbh-cl-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gecbh-cl",
    storageBucket: "gecbh-cl.appspot.com",
    messagingSenderId: "533181577140",
    appId: "1:533181577140:web:b90e2b3f4d783cf952a4e1"
  };
  
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage();
export const storageRef = ref(storage);
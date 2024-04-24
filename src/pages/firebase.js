// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt59b_Mt5T49xGcufVUn5-78dAAbHrXgs",
  authDomain: "gecbhclone.firebaseapp.com",
  projectId: "gecbhclone",
  storageBucket: "gecbhclone.appspot.com",
  messagingSenderId: "416594936431",
  appId: "1:416594936431:web:dfe9f3f70d232ce72ec39a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
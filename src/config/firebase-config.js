import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDx2zsvJDlm6oZxzyhdjCVbj-9umos0TTE",
  authDomain: "learn-lingo-ece72.firebaseapp.com",
  projectId: "learn-lingo-ece72",
  storageBucket: "learn-lingo-ece72.appspot.com",
  messagingSenderId: "1037640854706",
  appId: "1:1037640854706:web:4ea7b22ea254e2bece6dab",
  databaseURL:
    "https://learn-lingo-ece72-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

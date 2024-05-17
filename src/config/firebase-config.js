import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const API_KEY = import.meta.env.VITE_API_KEY;
const AUTHDOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const PROJECTID = import.meta.env.VITE_PROJECT_ID;
const STORAGEBUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGINGSENDERID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const APPID = import.meta.env.VITE_APP_ID;
const DATABASEURL = import.meta.env.VITE_DATABASE_URL;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  databaseURL: DATABASEURL,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

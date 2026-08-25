import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgMW76guSEzuLnmbp8XrPSjsDzhV2smUQ",
  authDomain: "ratguardpro-7944b.firebaseapp.com",
  projectId: "ratguardpro-7944b",
  storageBucket: "ratguardpro-7944b.firebasestorage.app",
  messagingSenderId: "1013839324868",
  appId: "1:1013839324868:web:fecfedaac2dbc598000b91",
  measurementId: "G-QHEP160DEX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

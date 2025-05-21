// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfi3WF0Xj8dtZanC1pAMrnklL9iZe5YBo",
  authDomain: "okveto-kupon.firebaseapp.com",
  projectId: "okveto-kupon",
  storageBucket: "okveto-kupon.appspot.com",
  messagingSenderId: "601390735010",
  appId: "1:601390735010:web:78ceb0facbcbb4947b01fb",
  measurementId: "G-C60Q44P5SV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

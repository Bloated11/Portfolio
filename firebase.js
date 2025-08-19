// firebase.js
// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDayWC24ZNCYD68aQQlr5qL10IViJKBfhM",
  authDomain: "portfolio-e2ba3.firebaseapp.com",
  projectId: "portfolio-e2ba3",
  storageBucket: "portfolio-e2ba3.firebasestorage.app",
  messagingSenderId: "660146572094",
  appId: "1:660146572094:web:5342d1997dc9863a27ba6f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };

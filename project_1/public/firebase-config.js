import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// इथे तुमचा खरा MediScript चा firebaseConfig कोड टाका
const firebaseConfig = {
  apiKey: "AIzaSyDshtIK7BVa5gRVXL1TJB3yIlXWhbiNUsY",
  authDomain: "mediscript-16c4b.firebaseapp.com",
  projectId: "mediscript-16c4b",
  storageBucket: "mediscript-16c4b.firebasestorage.app",
  messagingSenderId: "452512782717",
  appId: "1:452512782717:web:ca7c3bab69678efe019414"
};

// Firebase सुरू करा आणि export करा जेणेकरून इतर फाईल्स ते वापरू शकतील
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
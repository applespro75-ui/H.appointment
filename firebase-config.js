// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, onSnapshot, query, where, orderBy, getDoc, deleteDoc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHdJMt1vRiA6SIEHlJyrYfvCCrxdmHNbk",
  authDomain: "hospital-mgmt-4955b.firebaseapp.com",
  projectId: "hospital-mgmt-4955b",
  storageBucket: "hospital-mgmt-4955b.firebasestorage.app",
  messagingSenderId: "532526602721",
  appId: "1:532526602721:web:7c5e955f6a25a48bf8daa0",
  measurementId: "G-M04RVTYFEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc
};

// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyZLhvYJsF3WYDfMCOKwwtSpZwbTtU6_c",
  authDomain: "diffo-f24df.firebaseapp.com",
  projectId: "diffo-f24df",
  storageBucket: "diffo-f24df.appspot.com",
  messagingSenderId: "235527103201",
  appId: "1:235527103201:web:5e3d48dd98baed22408da0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
  // Check if user is signed in
  if (user) {
    const loggedInUserId = localStorage.getItem('loggedInUserId');

    // Check if loggedInUserId exists in local storage
    if (loggedInUserId) {
      const docRef = doc(db, "users", loggedInUserId);
      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            document.getElementById('email').value = userData.email;
            document.getElementById('name').value = userData.name;
          } else {
            console.error("No user data found!");
          }
        })
        .catch((error) => {
          console.error("Error fetching document:", error);
        });
    } else {
      console.warn("User logged in but no ID found in localStorage.");
      window.location.href = 'singin.html';
    }
  } else {
    console.log("No user is signed in.");
    window.location.href = 'singin.html'; // Redirect to login page
  }
});

// Logout function
const logoutButton = document.getElementById("logout");
if (logoutButton) {
  logoutButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent any default action
    signOut(auth)
      .then(() => {
        localStorage.removeItem('loggedInUserId');
        window.location.href = 'singin.html'; // Redirect to login page
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  });
}

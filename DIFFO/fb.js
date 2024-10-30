// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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

function showmessage(message, divid) {
  const messagediv = document.getElementById(divid);
  messagediv.style.display = "block";
  messagediv.innerHTML = message;
  messagediv.style.opacity = 1;
  setTimeout(() => {
    messagediv.style.opacity = 0;
  }, 5000);
}

// Sign up event
const signupButton = document.getElementById("btnup");
signupButton.addEventListener("click", (event) => {
  event.preventDefault(); // منع إعادة تحميل الصفحة
  const email = document.getElementById("remail").value;
  const password = document.getElementById("rpassword").value;
  const name = document.getElementById("rname").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        name: name
      };

      showmessage('Signup successful', 'singupmessage');

      const docRef = doc(db, "user", user.uid);
      return setDoc(docRef, userData);
    })
    .then(() => {
      window.location.href = 'singin.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        showmessage('Account already in use', 'singupmessage');
      } else {
        console.error("Error writing document:", error);
      }
    });
});

// Sign in event
const signinButton = document.getElementById("btnin");
signinButton.addEventListener("click", (event) => {
  event.preventDefault(); // منع إعادة تحميل الصفحة
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      showmessage('Login successful', 'singinmessage');
      localStorage.setItem('loggedInUserId', user.uid);
      window.location.href = 'diffo.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
        showmessage('Incorrect email or password', 'singinmessage');
      } else {
        showmessage('An error occurred. Please try again.', 'singinmessage');
      }
    });
});

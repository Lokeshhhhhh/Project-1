import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTy7-LZIHN_7gwKKxR-h6qguKjnYOhLdk",
  authDomain: "formlogin-72117.firebaseapp.com",
  projectId: "formlogin-72117",
  storageBucket: "formlogin-72117.appspot.com",
  messagingSenderId: "62428936681",
  appId: "1:62428936681:web:028613db543018c2dfb378"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById('reg-btn').addEventListener('click', function(){
document.getElementById("register-div").style.display="inline";
document.getElementById("login-div").style.display="none";

});

document.getElementById("log-btn").addEventListener('click', function(){
    document.getElementById("register-div").style.display="none";
    document.getElementById("login-div").style.display="inline";
    
    });

    document.getElementById("login-btn").addEventListener('click', function(){
const loginEmail=document.getElementById("login-email").value;
 const loginPassword=document.getElementById("login-passwword").value;

 signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {  
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });

  document.getElementById("register-btn").addEventListener('click', function(){
    const registerEmail=document.getElementById("register-email").value;
     const registerPassword=document.getElementById("register-passwword").value;
    
     createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {  
        const user = userCredential.user;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("register-div").style.display="none";
        document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("register-div").style.display="none";
        document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
    
      });
    });

    document.getElementById("log-out-btn").addEventListener('click', function(){
        signOut(auth).then(() => {
             document.getElementById("result-box").style.display="none";
            document.getElementById("register-div").style.display="inline";
          }).catch((error) => {
            document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
          });
    });















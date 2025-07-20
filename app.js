import{initializeApp}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import{getAuth,onAuthStateChanged,signOut}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
const firebaseConfig={apiKey:"AIzaSyC2ycqVO32RF53ME6sgWFcX3NlLXnH7Jd4",authDomain:"mlbb-diamond-shop-b1cf3.firebaseapp.com",databaseURL:"https://mlbb-diamond-shop-b1cf3-default-rtdb.firebaseio.com",projectId:"mlbb-diamond-shop-b1cf3",storageBucket:"mlbb-diamond-shop-b1cf3.firebasestorage.app",messagingSenderId:"212898123118",appId:"1:212898123118:web:8da7c010f32f43d84a057f",measurementId:"G-MY7405CQHQ"};
const app=initializeApp(firebaseConfig);const auth=getAuth(app);
onAuthStateChanged(auth,user=>{if(!user){location.href="login.html";}});
document.addEventListener("DOMContentLoaded",()=>{const btn=document.getElementById("logout");btn&&btn.addEventListener("click",()=>signOut(auth).then(()=>location.href="login.html").catch(e=>console.error(e)));});

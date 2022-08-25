
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoc_cR_n_ggXIts73kf1-Q5HPxEibFxTw",
    authDomain: "upsidedown-55d0e.firebaseapp.com",
    projectId: "upsidedown-55d0e",
    storageBucket: "upsidedown-55d0e.appspot.com",
    messagingSenderId: "721478160178",
    appId: "1:721478160178:web:4fe176dbe504db60a7912b",
    measurementId: "G-N23495D8N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHU6OdiDYd3kKWK4mJaPM2obzRTJ1YYRg",
  authDomain: "the-dragon-news-458c5.firebaseapp.com",
  projectId: "the-dragon-news-458c5",
  storageBucket: "the-dragon-news-458c5.appspot.com",
  messagingSenderId: "156333518341",
  appId: "1:156333518341:web:af076c2ae9bdb27ef5766c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
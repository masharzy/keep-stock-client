// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAE5nHHPq_N6bjYc8xBOvnJ7VwhDVzLJw",
  authDomain: "keep-stock-masharzy.firebaseapp.com",
  projectId: "keep-stock-masharzy",
  storageBucket: "keep-stock-masharzy.appspot.com",
  messagingSenderId: "469320382431",
  appId: "1:469320382431:web:1d93b1afe28dd4cb71366a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
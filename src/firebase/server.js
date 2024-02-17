import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBl5ApavfRxTpfQYFPI5XQ4STfkEH8gNv4",
  authDomain: "register-a89de.firebaseapp.com",
  projectId: "register-a89de",
  storageBucket: "register-a89de.appspot.com",
  messagingSenderId: "418854860891",
  appId: "1:418854860891:web:d01db5b80a1f37a99fe77e",
  measurementId: "G-QVG1MPB86E",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

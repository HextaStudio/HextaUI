import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk94kaggHJEZN_9kDL9Oy7tI8vl5D2h0s",
  authDomain: "hextastudio-ui.firebaseapp.com",
  projectId: "hextastudio-ui",
  storageBucket: "hextastudio-ui.appspot.com",
  messagingSenderId: "147649953179",
  appId: "1:147649953179:web:9e6aa46fa7fc197799b53e",
  measurementId: "G-6TJ71DTKHK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;

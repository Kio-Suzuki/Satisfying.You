import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAk-4r_JaAdUZSX7mDyQVA6ma8wI5_4uPA",
  authDomain: "satisfying-you-5a171.firebaseapp.com",
  projectId: "satisfying-you-5a171",
  storageBucket: "satisfying-you-5a171.appspot.com",
  messagingSenderId: "227964845516",
  appId: "1:227964845516:web:2e577833b65d4a7721b169",
  measurementId: "G-73CYFR6R8R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
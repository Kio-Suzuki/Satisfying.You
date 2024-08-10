import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { initializeFirestore, collection} from "firebase/firestore"
import { getStorage, ref} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDwzon_5YNwuQuM9rFQBvrFzwM1q15ASRk",
  authDomain: "eita-47936.firebaseapp.com",
  projectId: "eita-47936",
  storageBucket: "eita-47936.appspot.com",
  messagingSenderId: "958910281035",
  appId: "1:958910281035:web:8eb6517b1e0e118d0964ce"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });
const storage = getStorage(app);
const storageRef = ref(storage);
const pesquisasCollection = collection(db, 'pesquisas');

export { auth, app, db, storage, storageRef, pesquisasCollection}
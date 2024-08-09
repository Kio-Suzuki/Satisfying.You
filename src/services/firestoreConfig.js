import { initializeFirestore, collection } from 'firebase/firestore';
import app from '../config/firebase';

const db = initializeFirestore(app, { experimentalForceLongPolling: true });

const pesquisasCollection = collection(db, 'pesquisas');

export { db, pesquisasCollection };

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// As chaves virão do .env
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// ✅ LOG DE DEBUG (IMPORTANTE)
console.log("🔥 Firebase Debug Config:");
console.log("API KEY =>", firebaseConfig.apiKey);
console.log("AUTH DOMAIN =>", firebaseConfig.authDomain);
console.log("DB URL =>", firebaseConfig.databaseURL);
console.log("PROJECT ID =>", firebaseConfig.projectId);
console.log("STORAGE =>", firebaseConfig.storageBucket);
console.log("SENDER ID =>", firebaseConfig.messagingSenderId);
console.log("APP ID =>", firebaseConfig.appId);

// Inicialização
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue };

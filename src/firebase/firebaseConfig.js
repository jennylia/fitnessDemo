import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz7xLLRbueK52WetZZwifHFktEQBPDNTw",
  authDomain: "fitness-6b58a.firebaseapp.com",
  databaseURL: "https://fitness-6b58a-default-rtdb.firebaseio.com",
  projectId: "fitness-6b58a",
  storageBucket: "fitness-6b58a.appspot.com",
  messagingSenderId: "725171579700",
  appId: "1:725171579700:web:fd695afc4a5010d50ed361"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

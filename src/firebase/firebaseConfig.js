// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import Axios from 'axios'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
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

//const db = firebase.firestore()


const db = getFirestore(app);

async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

export { Axios, db , getCities}

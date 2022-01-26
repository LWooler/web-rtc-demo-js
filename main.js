import './style.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from 'firebase/analytics';

document.querySelector('#app').innerHTML = `
  <h1>Hello Peers!</h1>
`;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBxzfDe4xSIrYoRfS21HMGyJal4Z4t6tXs',
  authDomain: 'fir-rtc-4f6c0.firebaseapp.com',
  projectId: 'fir-rtc-4f6c0',
  storageBucket: 'fir-rtc-4f6c0.appspot.com',
  messagingSenderId: '970816487679',
  appId: '1:970816487679:web:a5a2d966db280ba291ccca',
  measurementId: 'G-DJ11F1J66Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

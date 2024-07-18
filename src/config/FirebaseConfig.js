
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCL834rUeYw4y-2lRJpfquB9OpCreonkrI",
  //authDomain: "ekhouvanjou-01.firebaseapp.com",
  projectId: "newera-01",
  //storageBucket: "ekhouvanjou-01.appspot.com",
  //messagingSenderId: "26191378183",
  //appId: "1:26191378183:web:5a4643c4f55f91910037a2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
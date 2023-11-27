import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxU6G7OTyLrfw_DrmwjWAhmJKW4obDgdk",
  authDomain: "e-commerce-76e18.firebaseapp.com",
  projectId: "e-commerce-76e18",
  storageBucket: "e-commerce-76e18.appspot.com",
  messagingSenderId: "998337860753",
  appId: "1:998337860753:web:91fdb329ea5abbd4665b30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const firestoreInit = () => {
    // return app.firestore();
    return app;
}

export default firestoreInit;
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAKoMO3q3FFzaCTQcYjqTb4kAcCrYwu7uc",
    authDomain: "nba-app-a6edd.firebaseapp.com",
    projectId: "nba-app-a6edd",
    storageBucket: "nba-app-a6edd.appspot.com",
    messagingSenderId: "924176361183",
    appId: "1:924176361183:web:d31c4cb0993dafbaa2eb6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



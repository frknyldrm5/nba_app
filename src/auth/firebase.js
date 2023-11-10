import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCOuIC2JmGrW_yPdTxcZ0ysbrTiXIYjuFE",
    authDomain: "react-blog-app-a1c9a.firebaseapp.com",
    projectId: "react-blog-app-a1c9a",
    storageBucket: "react-blog-app-a1c9a.appspot.com",
    messagingSenderId: "673310326158",
    appId: "1:673310326158:web:8765ed354699c36b3d78df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



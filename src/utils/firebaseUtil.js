import firebase from "firebase/app";


const firebaseUtil = firebase.initializeApp({

    apiKey: "AIzaSyCOuIC2JmGrW_yPdTxcZ0ysbrTiXIYjuFE",
    authDomain: "react-blog-app-a1c9a.firebaseapp.com",
    projectId: "react-blog-app-a1c9a",
    storageBucket: "react-blog-app-a1c9a.appspot.com",
    messagingSenderId: "673310326158",
    appId: "1:673310326158:web:8765ed354699c36b3d78df"

    });

export default firebaseUtil;

export const auth = firebaseUtil.auth();
export const firebaseDB = firebaseUtil.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
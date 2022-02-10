import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDV_-adSmSmw5cUsGLBduJ6eS2Z5wiJ4lA",
    authDomain: "coder-rj-joaquin.firebaseapp.com",
    projectId: "coder-rj-joaquin",
    storageBucket: "coder-rj-joaquin.appspot.com",
    messagingSenderId: "779951722730",
    appId: "1:779951722730:web:5dab8ec6c732f5b8a40793",
    measurementId: "G-H854K347LW",
});

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
};

import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAV73Qb0-cGPsiLtUVEvQki4XkxUCpaBOI",
    authDomain: "desafio-ht-9a765.firebaseapp.com",
    databaseURL: "https://desafio-ht-9a765.firebaseio.com",
    projectId: "desafio-ht-9a765",
    storageBucket: "desafio-ht-9a765.appspot.com",
    messagingSenderId: "957416520455",
    appId: "1:957416520455:web:55fa5454ef4bd980e4a3a2",
    measurementId: "G-8XEXLPXMZL"
};

const fire = firebase.initializeApp(config);
export default fire;
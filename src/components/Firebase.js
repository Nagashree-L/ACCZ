import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCJdJ3Sw4Zqaf1tTmEOe02NzKZ47qHcJvU",
    authDomain: "accz-d20e1.firebaseapp.com",
    projectId: "accz-d20e1",
    storageBucket: "accz-d20e1.appspot.com",
    messagingSenderId: "141526332725",
    appId: "1:141526332725:web:41819b73362f998691487c",
    measurementId: "G-6NDX9T8LZB"
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
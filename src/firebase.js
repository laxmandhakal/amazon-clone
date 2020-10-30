import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyALT7ntZcy3jCrkRC_oed2CEVTswP7oP78",
    authDomain: "clone-1fa43.firebaseapp.com",
    databaseURL: "https://clone-1fa43.firebaseio.com",
    projectId: "clone-1fa43",
    storageBucket: "clone-1fa43.appspot.com",
    messagingSenderId: "150746805460",
    appId: "1:150746805460:web:1728ac92ae908c0773b741"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
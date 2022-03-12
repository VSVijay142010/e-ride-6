import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDplJsJXKvaxUEkm4EmtfPi3VhiYNx6xdI",
  authDomain: "e-ride-e49cb.firebaseapp.com",
  projectId: "e-ride-e49cb",
  storageBucket: "e-ride-e49cb.appspot.com",
  messagingSenderId: "757311774998",
  appId: "1:757311774998:web:be574317a8ad851ab5b037"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

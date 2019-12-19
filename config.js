import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "webtest-cfb70.firebaseapp.com",
    databaseURL: "https://webtest-cfb70.firebaseio.com",
    projectId: "webtest-cfb70",
    storageBucket: "webtest-cfb70.appspot.com",
    messagingSenderId: "1053743564012",
    appId: "1:1053743564012:web:d5c74c8b79c4aa0c3411c9",
    measurementId: "G-K1PTEZSZZM"
  };

  let app = Firebase.initializeApp(config);

  export const db = app.database();
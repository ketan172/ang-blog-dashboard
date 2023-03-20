import { initializeApp } from 'firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const environment = {
  firebase: {
    projectId: 'ang-blog-4e656',
    appId: '1:1087722842416:web:d011d3f8564d2c6483c0f5',
    storageBucket: 'ang-blog-4e656.appspot.com',
    apiKey: 'AIzaSyAUxtIDvDMwQO3Z2gFBatFmSVZDISjdEAI',
    authDomain: 'ang-blog-4e656.firebaseapp.com',
    messagingSenderId: '1087722842416',
  },
    production: false,
}

// // // Use this to initialize the firebase App
// const app = initializeApp(environment.firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };


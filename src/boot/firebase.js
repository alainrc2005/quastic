import { boot } from 'quasar/wrappers';
import firebase from 'firebase/app';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBYDyYIIid6PAEGoJbkoTGMq-WQ7DDaJlk',
    authDomain: 'quastic.firebaseapp.com',
    projectId: 'quastic',
    storageBucket: 'quastic.appspot.com',
    messagingSenderId: '733155805449',
    appId: '1:733155805449:web:c28046b6ff94763d486bd8',
  };

  firebase.initializeApp(firebaseConfig);
});

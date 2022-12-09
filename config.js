
import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth'; 
 import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCuo3VjKleYqSci-4bDpYWjWp5pUwWnmJM",
    authDomain: "e-library-f8ecc.firebaseapp.com",
    projectId: "e-library-f8ecc",
    storageBucket: "e-library-f8ecc.appspot.com",
    messagingSenderId: "460207544406",
    appId: "1:460207544406:web:503050580bce8bb5dd43f7"
  };
  
 if (!firebase.apps.length) { firebase.initializeApp(clientCredentials); }

export default firebase.firestore()

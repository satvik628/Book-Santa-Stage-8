import firebase from 'firebase';


require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD26p71YHwcLLdfq7NExSr0ZVQooSngrF4",
    authDomain: "booksanta-c76-90.firebaseapp.com",
    projectId: "booksanta-c76-90",
    storageBucket: "booksanta-c76-90.appspot.com",
    messagingSenderId: "346144144655",
    appId: "1:346144144655:web:8730be97937644e0ad527a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

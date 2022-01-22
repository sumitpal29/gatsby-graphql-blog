import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBidnx71Thv34oZWsLmW09jmJQbizuyiEo',
  authDomain: 'sumit-pal-29.firebaseapp.com',
  databaseURL: 'https://sumit-pal-29.firebaseio.com',
  projectId: 'sumit-pal-29',
  storageBucket: 'sumit-pal-29.appspot.com',
  messagingSenderId: '183505640554',
  appId: '1:183505640554:web:92ba9bf0857d12874ebe13',
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const firebaseDB = app.firestore();
export { firebaseDB };

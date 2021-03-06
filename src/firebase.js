import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZoUH0vhrcTp5DAXCKpQ7zOBU_hJ7WxwQ",
  authDomain: "clone-1-ca481.firebaseapp.com",
  projectId: "clone-1-ca481",
  storageBucket: "clone-1-ca481.appspot.com",
  messagingSenderId: "387765813711",
  appId: "1:387765813711:web:ad9050fc9346b4dc55d2ba"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {auth, db};

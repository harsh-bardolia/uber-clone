import { initializeApp } from "firebase/app";
import {GoogleAuthProvider , getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAqrx-zwDcCKg5tCt_I-SOOd3M9Pfx-r34",
  authDomain: "uber-next-clone-live-b116c.firebaseapp.com",
  projectId: "uber-next-clone-live-b116c",
  storageBucket: "uber-next-clone-live-b116c.appspot.com",
  messagingSenderId: "205713502666",
  appId: "1:205713502666:web:2dc1fbfcc5a27ddced9f33"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth()

export {app,provider,auth}
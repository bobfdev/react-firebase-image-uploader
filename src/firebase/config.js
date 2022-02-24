import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDS39M5wc5DQpjMkOG8QmxDaIZ-485Z8BU",
    authDomain: "react-image-uploader-e03e9.firebaseapp.com",
    projectId: "react-image-uploader-e03e9",
    storageBucket: "react-image-uploader-e03e9.appspot.com",
    messagingSenderId: "663099707244",
    appId: "1:663099707244:web:619b3fa6621cbbeab7ed49"
  };
  
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
const db = getFirestore();

export { storage, db }


//   const projectStorage = firebase.storage();
//   const projectFirestore = firebase.firestore();

//   export { projectStorage, projectFirestore };


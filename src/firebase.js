// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyC1_Rqe-qLu_Fg3FgmLa_Fgw2GrJdeQIZg',
  authDomain: 'realtor-clone-react-78fab.firebaseapp.com',
  projectId: 'realtor-clone-react-78fab',
  storageBucket: 'realtor-clone-react-78fab.appspot.com',
  messagingSenderId: '557062357275',
  appId: '1:557062357275:web:8597e8b5f7ae83ae2b13be',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()

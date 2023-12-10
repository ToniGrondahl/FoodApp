import { IonRouterLink } from '@ionic/react';
import * as firebase from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth"

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDVFYEVQx_6vEHaafhy3BGPlFqnjcVeehM',

  authDomain: 'fir-app-cd7d5.firebaseapp.com',

  projectId: 'fir-app-cd7d5',

  storageBucket: 'fir-app-cd7d5.appspot.com',

  messagingSenderId: '243896020902',

  appId: '1:243896020902:web:efacc35ad19c4339b0e967'

});

const auth = getAuth();

export async function loginUser(username: string, password:string){

  try {
    const res = await signInWithEmailAndPassword(auth, username, password)
    console.log(res)
    
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
export async function registerUserValidation(username: string, password:string){

  try {
    const res = await createUserWithEmailAndPassword(auth, username, password)
    console.log(res)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}




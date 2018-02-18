import { firebaseApp, googleAuthProvider } from '../shared/services/firebase';

export const startRecordUser = (user) => {
  return {
    type: 'SIGNIN',
    user
  }
}

export const startSignin = () => {
  return () => {
    return firebaseApp.auth().signInWithPopup(googleAuthProvider);
  }
}

export const signout = () => {
  return {
    type: 'SIGNOUT',
  }
}

export const startSignout = () => {
  return () => {
    return firebaseApp.auth().signOut();
  }
}
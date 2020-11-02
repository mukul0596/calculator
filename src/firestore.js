import firebase from 'firebase';

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
    projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID
});
  
const firestoreDB = firebase.firestore();

export default firestoreDB;
import firebase from "firebase";

const firebaseConfig = {

    
  apiKey: "AIzaSyBg4Qv3V5GK2li33Fzmu5O3nezwQ5LKv30",
  authDomain: "facebookreplica1.firebaseapp.com",
  databaseURL: "https://facebookreplica1.firebaseio.com",
  projectId: "facebookreplica1",
  storageBucket: "facebookreplica1.appspot.com",
  messagingSenderId: "752588419863",
  appId: "1:752588419863:web:a95cc890de7c4434a5fd52",
  measurementId: "G-Q7HLXDN176"

}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
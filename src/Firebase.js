import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBEVCvK-3JdyAYxGZ9nPzAOXPjm36Z-X9k",
    authDomain: "fundoonotes-4ede7.firebaseapp.com",
    databaseURL: "https://fundoonotes-4ede7.firebaseio.com",
    projectId: "fundoonotes-4ede7",
    storageBucket: "fundoonotes-4ede7.appspot.com",
    messagingSenderId: "420455066377"
};
firebase.initializeApp(config);
const database=firebase.database();

export default {firebase,database};
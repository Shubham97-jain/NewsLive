import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAfwHLtWWzS1QxMoTdWup62s-SUmJIBJak",
    authDomain: "new-ive.firebaseapp.com",
    databaseURL: "https://new-ive.firebaseio.com",
    projectId: "new-ive",
    storageBucket: "new-ive.appspot.com",
    messagingSenderId: "399526656128",
    appId: "1:399526656128:web:67e8ff81d02eeb05a50e65",
    measurementId: "G-3F6VPSWD3G"

};

firebase.initializeApp(firebaseConfig);

export default firebase;
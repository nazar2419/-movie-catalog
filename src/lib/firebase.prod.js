import Firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// we need to somehow sees the database

//we need a config here
const config = {
    apiKey: "AIzaSyBCe-g7kBZ4C02-QZVOIlGfGTHrvixnKKY",
    authDomain: "neo-film.firebaseapp.com",
    projectId: "neo-film",
    storageBucket: "neo-film.appspot.com",
    messagingSenderId: "207709829285",
    appId: "1:207709829285:web:b5eb985dad04aa3857b54c"
};


const firebase = Firebase.initializeApp(config);



export { firebase };


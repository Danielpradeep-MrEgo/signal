import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDlKpWFdeYZ7pr11wbpiXqSTHyY6ECoopo",
	authDomain: "signal-b9716.firebaseapp.com",
	projectId: "signal-b9716",
	storageBucket: "signal-b9716.appspot.com",
	messagingSenderId: "199080822964",
	appId: "1:199080822964:web:943fde4fb577c5f4946fe1",
	measurementId: "G-JF8PSEFWV5",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

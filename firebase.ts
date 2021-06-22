import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBB0z3_YVVgIRizrRjDdFUdIuky0qJNcq0',
	authDomain: 'fb-yt-a9fea.firebaseapp.com',
	projectId: 'fb-yt-a9fea',
	storageBucket: 'fb-yt-a9fea.appspot.com',
	messagingSenderId: '826079481364',
	appId: '1:826079481364:web:a658ad971da0c49b356101',
	measurementId: 'G-S1VQ6E6T3V',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };

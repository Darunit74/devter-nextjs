
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyABBWJHCsU93YcRV4c-eIUsuzz_tN0ta70",
    authDomain: "devter-c83e0.firebaseapp.com",
    projectId: "devter-c83e0",
    storageBucket: "devter-c83e0.appspot.com",
    messagingSenderId: "594972964075",
    appId: "1:594972964075:web:e5588af43b7d3094f87aae",
    measurementId: "G-CJF2YLZ07K"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = ( user ) => {
    const { displayName, email, photoURL  } = user.providerData[0];

    return {
        avatar: photoURL,  
        username: displayName,
        email
    }
}

export const onAuthStateChange = ( onChange ) => { 
    return firebase.auth().onAuthStateChanged( user => {
        const normalizedUser = mapUserFromFirebaseAuthToUser( user );
        onChange( normalizedUser );
    } )
}

export const loginWithGithub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(githubProvider)
}
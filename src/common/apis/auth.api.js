import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from '@firebase/auth';
import { auth } from '../../firebase';

export const signupApi = (values) => {
    console.log(values)
    try {
        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
               
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        // User is signed in, see docs for a list of available properties
                        // https://firebase.google.com/docs/reference/js/auth.user

                        const uid = user.uid;
                        sendEmailVerification(auth.currentUser)
                            .then(() => {
                                // Email verification sent!
                                // ...
                                console.log("Email verification sent!");
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log(errorCode, errorMessage);
                                // ..
                            });
                        // ...
                    } else {
                        // User is signed out
                        // ...
                    }
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    } catch (error) {
        console.log(error);
    }
}
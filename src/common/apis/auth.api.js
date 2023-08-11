import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from '@firebase/auth';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { signOut } from "firebase/auth";

export const signupApi = (values) => {
    console.log(values)
    try {
        return new Promise((resolve, reject) => {
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
                                    resolve({ message: "Email verification sent!", user: user });
                                })
                                .catch((error) => {
                                    const errorCode = error.code;
                                    if (errorCode.localeCompare("auth/network-request-failed") === 0) {
                                        reject({ message: "please check internet" });
                                    } else if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                                        reject({ message: "email is already register" });
                                    }
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
                    if (errorCode.localeCompare("auth/network-request-failed") === 0) {
                        reject({ message: "please check internet" });
                    } else if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                        reject({ message: "email is already register" });
                    }

                });
        })
    } catch (error) {
        console.log(error);
    }
}


export const loginApi = (values) => {

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.emailVerified) {
                    resolve({ message2: "Email verified", user: user });
                    // localStorage.setItem("login", "true")
                    // navigate("/")
                } else {
                    reject({ message: "check email" });
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                // const errorMessage = error.message;
                if (errorCode.localeCompare('auth/wrong-password') === 0) {
                    reject({ message: "please enter correct  password" })
                } else if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject({ message: "please signup " })
                }

            });
    })
}


export const forgotApi = (values) => {
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, values.email)
            .then(() => {
                // Password reset email sent!
                // ..
                resolve({message:"Password reset email sent!"});
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject({ message: "please signup " })
                }
                // ..
            });
    })
}

export const logoutApi = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then(() => {
            // 
            resolve({message:"Sign-out successful."})
            console.log();
        }).catch((error) => {
            // An error happened.
            reject({message:"An error happened."})
        });
    })

}
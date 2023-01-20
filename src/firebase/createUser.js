import { auth } from "./firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const createUser = (user) =>{
    createUserWithEmailAndPassword(auth, user.email, user.password);
}
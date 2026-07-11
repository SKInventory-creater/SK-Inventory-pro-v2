import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "./config.js";

/**
 * Email / Password Login
 */
export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

/**
 * Logout
 */
export async function logout() {
  return await signOut(auth);
}

/**
 * Auth State Listener
 */
export function authState(callback) {
  return onAuthStateChanged(auth, callback);
}

/**
 * Current User
 */
export function currentUser() {
  return auth.currentUser;
}

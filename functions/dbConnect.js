import { initializeApp, cert, getApps } from "firebase/app";
import { getFirestore } from 'firebase-admin/firestore'
import { credentials } from 'dbsecrets.js'




export function dbConnect() {
    if (!getApps.length()) {
        initializeApp({
            credential: cert(credentials)
        })
    }
    return getFirestore();
}
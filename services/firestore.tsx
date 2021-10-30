import app from './firebase'
import { getFirestore, collection, getDocs } from "firebase/firestore"
import {Konsultasi} from "../types/db";

const db = getFirestore(app)

async function obtainCollectionData(collectionName:string){
    const coll = collection(db, collectionName);
    const docs = await getDocs(coll);
    return docs.docs.map(doc => doc.data());
}

export default {
    getKonsultasi() {return obtainCollectionData("konsultasi")}
}




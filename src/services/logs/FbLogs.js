import {collection, addDoc, Timestamp} from 'firebase/firestore'
import db from './firebase-db';

export const addLog = async (data, logType) => {
    try {
        const result = await addDoc(collection(db, logType ? logType : 'logs'), {
            ...data,
            createdAt: Timestamp.now()
        });
        console.log('fb result', result);
        return result;    
    } catch (error) {
        console.log('fb result', error);
        return error;
    }
    
}

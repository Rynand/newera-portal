import { collection, getDocs, getDoc, doc, addDoc, deleteDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/FirebaseConfig';

class ExampleService {
    constructor(c) {
        this.collection = c || 'Example';
    }

    getExample = async () => {
        try {
            const snapshot = await getDocs(collection(db, this.collection));
            const list = snapshot.docs.map(doc => (
                {
                    ...doc.data(),
                    id: doc.id
                }
            ));

            return list;
        } catch (error) {
            return [];
        }
    }

    getExampleWithRefs = async () => {
        try {
            const snapshot = await getDocs(collection(db, this.collection));
            const list = snapshot.docs.map(async doc => {
                const user_ref = doc.data().user_ref;
                const group_ref = doc.data().group_ref;
                const user_data = await getDoc(user_ref);
                const group_data = await getDoc(group_ref);
                return {
                    ...doc.data(),
                    id: doc.id,
                    user_data: user_data.data(),
                    group_data: group_data.data()
                };
            });

            return await Promise.all(list);
        } catch (error) {
            return [];
        }
    }

    getExampleById = async (id) => {
        try {
            const snapshot = await getDoc(doc(db, this.collection, id));
            return { ...snapshot.data(), id: snapshot.id };
        } catch (error) {
            return {};
        }
    }

    getExampleByIdWithRefs = async (id) => {
        try {
            const snapshot = await getDoc(doc(db, this.collection, id));
            const user_ref = snapshot.data().user_ref;
            const group_ref = snapshot.data().group_ref;
            const user_data = await getDoc(user_ref);
            const group_data = await getDoc(group_ref);
            return {
                ...snapshot.data(),
                id: snapshot.id,
                user_data: user_data.data(),
                group_data: group_data.data()
            };
        } catch (error) {
            return {};
        }
    }

    createExample = async (model) => {
        try {
            await addDoc(collection(db, this.collection), model);
            return true;
        } catch (error) {
            return false;
        }
    }

    createExampleWithRefs = async (model) => {
        try {
            model.user_ref = doc(db, model.user_ref);
            model.group_ref = doc(db, model.group_ref);
            await addDoc(collection(db, this.collection), model);
            return true;
        } catch (error) {
            return false;
        }
    }

    updateExample = async (model) => {
        try {
            await setDoc(doc(db, this.collection, model.id), model);
            return true;
        } catch (error) {
            return false;
        }
    }

    deleteExample = async (id) => {
        try {
            await deleteDoc(doc(db, this.table, id));
            return true;
        } catch (error) {
            return false;
        }
    }
}

export default ExampleService;
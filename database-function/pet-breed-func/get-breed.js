const admin = require('../../config/firebase-config');
const { COLLECTION } = require('../../constants/collection');
const db = admin.firestore();

const getBreedCount = async () => {
    try {
        const abc = await db.collection(COLLECTION.petBreed).get(); 
        const breedCount = abc.size; 
        return breedCount;
    } catch (error) {
       
        return error;
    }
}

module.exports = { getBreedCount };


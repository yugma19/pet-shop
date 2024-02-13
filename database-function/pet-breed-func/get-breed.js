const admin = require('../../config/firebase-config');
const { COLLECTION } = require('../../constants/collection');
const db = admin.firestore();

const getBreedCount = async () => {
    try {
        const numberOfBreeds = await db.collection(COLLECTION.petBreed).get(); 
        const breedCount = numberOfBreeds.size; 
        return breedCount;
    } catch (error) {
       
        return error;
    }
}

module.exports = { getBreedCount };


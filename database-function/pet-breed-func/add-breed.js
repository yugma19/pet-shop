const admin = require('../../config/firebase-config');
const { COLLECTION } = require('../../constants/collection');
const db = admin.firestore();

const addBreed = async data => {
    try
    {
    await db.collection(COLLECTION.petBreed).doc(data.breedId).create(data);
    return true;
   }
    catch(error)
    {
     return error;
    }
};
module.exports={addBreed};


// const addToy = async data => {
//     try {
//         console.log('Adding toy to FireStore:', data);
//         await db.collection('petToys').doc(data.id).create(data);
//         console.log('Toy added successfully.');
//         return true;
//     } catch (error) {
//         console.error('Error adding toy to FireStore:', error);
//         return error;
//     }
// };
//module.exports={addToy};
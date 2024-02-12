const admin = require('../../config/firebase-config');
const { COLLECTION } = require('../../constants/collection');
const db = admin.firestore();
 const updateBreed = async data =>
 {
    try
    {
      
     await db.collection(COLLECTION.petBreed).doc(data.breedId).update(data);
    }
    catch(error)
    {
      console.log(error);
         return error;
         
    }
 };

 module.exports={updateBreed};
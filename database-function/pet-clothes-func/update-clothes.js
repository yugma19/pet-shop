const admin = require('../../config/firebase-config');
const { COLLECTION } = require('../../constants/collection');
const db = admin.firestore();

const updateClothes = async data =>
{
    try
    {
     await db.collection(COLLECTION.petClothes).doc(data.clothesId).update(data);
    }
    catch(error)
    {  
        return error;
    }
};
module.exports={updateClothes};
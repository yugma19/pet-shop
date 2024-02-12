const admin = require('../../config/firebase-config');
const {COLLECTION} = require('../../constants/collection');
const db = admin.firestore();
const deleteClothes= async data =>
{
    try
    {
      await db.collection(COLLECTION.petClothes).doc(data.clothesId).delete();
    }
    catch(error)
    {
    return error;

    }
};
module.exports={deleteClothes};
const admin = require('../../config/firebase-config');
const {COLLECTION} = require('../../constants/collection');
const db = admin.firestore();

const addClothes = async data =>
{
    try
    {
      await db.collection(COLLECTION.petClothes).doc(data.clothesId).create(data);

    }
    catch(error)
    {
       return error;
    }
};
module.exports={addClothes};
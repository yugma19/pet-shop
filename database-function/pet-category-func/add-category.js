const admin = require('../../config/firebase-config');
const {COLLECTION} = require('../../constants/collection');
const db = admin.firestore();

const addCategory = async data =>
{
    try
    {
      
      await db.collection(COLLECTION.petCategory).doc(data.categoryId).create(data);
      return true;
    }
    catch(error)
    {
        console.log(error);
       return error;
    }
};
module.exports={addCategory};
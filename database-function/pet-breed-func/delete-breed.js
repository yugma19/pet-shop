const admin = require('../../config/firebase-config');
const {COLLECTION} = require('../../constants/collection');
const db = admin.firestore();

const deleteBreed = async data =>
{
    try
    {
      await db.collection(COLLECTION.petBreed).doc(data).delete();
      return true;
    }
    catch(error)
    {
        console.log(error);
       return error;
    }
};
module.exports={deleteBreed};
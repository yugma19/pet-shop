const admin = require('../../config/firebase-config');
const {COLLECTION} = require('../../constants/collection');
const db = admin.firestore();
const updateFood = async data =>
{
    try
    {
      await db.collection(COLLECTION.petFood).doc(data.foodId).update(data);
    }
    catch(error)
    {
       return error;
    }
};
module.exports={updateFood};

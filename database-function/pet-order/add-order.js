const admin = require('../../config/firebase-config');

const {COLLECTION} = require('../../constants/collection');
const db = admin.firestore();

const addOrder = async data =>
{
    try
    {
      await db.collection(COLLECTION.order).doc(data.orderId).create(data);
      return true;
    }
    catch(error)
    {
       return error;
    }
};
module.exports={addOrder};
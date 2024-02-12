const admin = require('../../config/firebase-config');
const {COLLECTION}= require('../../constants/collection');
const db = admin.firestore();

const addFood = async data =>
{
    try{
        await db.collection(COLLECTION.petFood).doc(data.foodId).create(data);
    }
    catch(error)
    {
       return error;
    }

};
module.exports={addFood};
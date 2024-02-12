const admin = require('../../config/firebase-config');
const {COLLECTION} = require('../../constants/collection');
const db = admin.firestore();
const deleteFood = async data =>
{
    try
{
await db.collection(COLLECTION.petFood).doc(data.foodId).delete();
}
catch(error)
{
return error;
}

};

module.exports={deleteFood};













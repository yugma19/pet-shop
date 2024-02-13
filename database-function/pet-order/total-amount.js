const admin = require('../../config/firebase-config');
const { COLLECTION } = require('../../constants/collection');
const db = admin.firestore();

const calculateAmt = async itemsData => {
    try {
        let totalAmount = 0;

        if(itemsData.foodId){
            const foodPricesSnapshot = await db.collection(COLLECTION.petFood).doc(itemsData.foodId).get();
            const foodData = foodPricesSnapshot.data();
            totalAmount = totalAmount +(foodData.price * foodData.quantity);
        }else if(itemsData.clothesId) {
            const clothesPricesSnapshot = await db.collection(COLLECTION.petClothes).doc(itemsData.clothesId).get();
            const clothesData = clothesPricesSnapshot.data();
            totalAmount = totalAmount +(clothesData.price * clothesData.quantity);
        }
        

        return totalAmount; 
    } catch (error) {
        throw error;
    }
};
module.exports = { calculateAmt };

   // const foodPricesSnapshot = await db.collection(COLLECTION.petFood).get();
        // foodPricesSnapshot.forEach(doc => {
        //     const foodData = doc.data();
        //     if (foodData && foodData.price) {
        //         prices[foodData.foodName] = foodData.price;
        //     }
        // });

        // const clothesPricesSnapshot = await db.collection(COLLECTION.petClothes).get();
        // clothesPricesSnapshot.forEach(doc => {
        //     const clothesData = doc.data();
        //     if (clothesData && clothesData.price) {
        //         prices[clothesData.outfit] = clothesData.price;
        //     }
        // });


        // const foodPricesSnapshot = await db.collection(COLLECTION.petFood).get();
        // const clothesPricesSnapshot = await db.collection(COLLECTION.petClothes).get();

        // foodPricesSnapshot.forEach(doc => {
        //     const data = doc.data();
        //     if (doc.id === itemsData.foodId) {
        //         totalAmount += data.price * itemsData.foodQuantity; 
        //     }
        // });

        // clothesPricesSnapshot.forEach(doc => {
        //     const data = doc.data();
        //     if (doc.id === itemsData.clothesId) {
        //         totalAmount += data.price * itemsData.clothesQuantity; 
        //     }
        // });

        // return totalAmount; 
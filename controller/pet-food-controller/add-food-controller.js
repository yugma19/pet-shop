const uuid = require('uuid');
const { addFood } = require('../../database-function/pet-food-func/add-food');
const generateResponse = require('../../utils/generate-response');

const addFoodController = async(req,res,next)=>
{
    try
    {
       const
       {
        body:
        {
            breedId='',
            foodName ='',
            productType ='',
            packageType ='',
            price ='',
        }
       }=req;
       const foodId = uuid.v4();
       const data =
       {
        foodId,
        breedId,
        foodName,
        productType,
        packageType,
        price
       };
       await addFood(data);
       return res.send(generateResponse('Food added',data));

    }
    catch(error)
    {
       return next(error);
    }
};
module.exports=addFoodController;
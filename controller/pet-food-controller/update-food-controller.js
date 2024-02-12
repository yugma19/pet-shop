const uuid = require('uuid');
const {updateFood} = require('../../database-function/pet-food-func/update-food');
const generateResponse = require('../../utils/generate-response');
const lodash = require('lodash');
const updateFoodController = async(req,res,next)=>
{
    try
    {
      let
      {
         body:
         {
          breedId='',
          foodName='',
          productType='',
          packageType='',
          price='',
         }
      }=req;
      const {foodId} = req.params;
    let data=
    {
       foodId,
       breedId,
       foodName,
       productType,
       packageType,
       price
    };
    data = lodash.pickBy(data,lodash.identity);
    await updateFood(data);
    return res.send(generateResponse('updated food',data));

    }
    catch(error)
    {
    return next(error);
    }
};
module.exports=updateFoodController;
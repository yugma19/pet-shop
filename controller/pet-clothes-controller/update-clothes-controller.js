
const {updateClothes}= require('../../database-function/pet-clothes-func/update-clothes');
const generateResponse = require('../../utils/generate-response');
const lodash = require('lodash');
const updateClothesController = async(req,res,next)=>
{
    try
    {
      let
      {
        body:
        {
          breedId='',
            size='',
            material='',
            outfit='',
            price='',
        }
      }=req;
      const {clothesId} = req.params;
      let data =
      {
        clothesId,
        breedId,
        size,
        material,
        outfit,
        price
      }
      data = lodash.pickBy(data, lodash.identity);  
      await updateClothes(data);
      return res.send(generateResponse('updated',data));
    }
    catch(error)
    {
      return next(error);
    
    }
};
module.exports=updateClothesController;
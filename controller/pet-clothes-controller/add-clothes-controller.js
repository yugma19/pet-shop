const uuid = require('uuid');
const {addClothes} = require('../../database-function/pet-clothes-func/add-clothes');
const generateResponse = require('../../utils/generate-response');
const addClothesController = async(req,res,next)=>
{
    try
    {
        const
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
         const clothesId = uuid.v4();
         const data=
         {
            clothesId,
            breedId,
            size,
            material,
            outfit,
            price
         }
         await addClothes(data);
         return res.send(generateResponse('clothes added',data));
    }
    catch(error)
    {
      return next(error);
    }

};
module.exports=addClothesController;
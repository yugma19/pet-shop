const uuid = require('uuid');
const {updateBreed} = require('../../database-function/pet-breed-func/update-breed');
const generateResponse = require('../../utils/generate-response');
 const lodash = require('lodash');
const updateBreedController = async(req,res,next)=>
{
    try
    {
        const
        {
            body:
            {
                categoryId='',
                name ='',
                purpose ='',
                price='',
                imageUrl='',
            },

        }=req;
        const {breedId } = req.params;
     let data = 
     {
        breedId,
        categoryId,
        name,
       purpose,
        price,
        imageUrl,
     };
   
    data = lodash.pickBy(data, lodash.identity);
      await updateBreed(data);
      return res.send(generateResponse('updated',data));
    }
    
    catch(error)
    {
     return next(error);
     
    }

};
module.exports=updateBreedController;
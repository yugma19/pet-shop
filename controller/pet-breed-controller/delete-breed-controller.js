const uuid = require('uuid');
const { deleteBreed }= require('../../database-function/pet-breed-func/delete-breed');
const { getBreedCount } = require('../../database-function/pet-breed-func/get-breed');
const generateResponse = require('../../utils/generate-response');
const ApiError = require('../../utils/ApiError');
const httpStatus = require('http-status');

const deleteBreedController = async(req,res,next)=>
{
    try
    {
      const { breedId =' '}= req.params;
      if(!breedId)
      {
            throw new ApiError(httpStatus[400],"not found data");

      }  
    await deleteBreed(breedId);
    const breedCount = await getBreedCount();
    

    return res.send(generateResponse('breed deleted',breedCount));

    }
      
    catch(error)
    {
        return next(error);
    }
};
module.exports=deleteBreedController;
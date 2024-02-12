const uuid = require('uuid');
const { deleteCategory }= require('../../database-function/pet-breed-func/delete-breed');
const generateResponse = require('../../utils/generate-response');
const ApiError = require('../../utils/ApiError');
const httpStatus = require('http-status');

const deleteCategoryController = async(req,res,next)=>
{
    try
    {
      const { categoryId =' '}= req.body;
      if(!categoryId)
      {
            throw new ApiError(httpStatus[400],"not found data");

      };
    await deleteCategory(categoryId);
    return res.send(generateResponse('deleted'));

    }
      
    catch(error)
    {
        return next(error);
    }
};
module.exports=deleteCategoryController;
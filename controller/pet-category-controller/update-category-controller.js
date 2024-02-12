const uuid = require('uuid');
const {updateCategory} = require('../../database-function/pet-breed-func/update-breed');
const generateResponse = require('../../utils/generate-response');
 const lodash = require('lodash');
const updateCategoryController = async(req,res,next)=>
{
    try
    {
        const
        {
            body:
            {
                
               category=''
            },

        }=req;
        const {categoryId } = req.params;
     let data = 
     {
        categoryId,
        category
     };
   
    data = lodash.pickBy(data, lodash.identity);
      await updateCategory(data);
      return res.send(generateResponse('updated',data));
    }
    
    catch(error)
    {
     return next(error);
     
    }

};
module.exports=updateCategoryController;
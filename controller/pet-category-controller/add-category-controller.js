const uuid = require('uuid');
const {addCategory} = require('../../database-function/pet-category-func/add-category');
const generateResponse = require('../../utils/generate-response');
const addCategoryController = async (req,res,next)=>
{
    try
    {
    const
       {
           body:
           {
            category ='',
           },
        }=req;
             const categoryId= uuid.v4();
             const data = {
            categoryId,
            category
    };
    await addCategory(data);
    return res.send(generateResponse('category added',data));
    }
    catch(error)
    {
        return next(error);
    }
};
module.exports=addCategoryController;
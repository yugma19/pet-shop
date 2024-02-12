const uuid = require('uuid');
const {addBreed} = require('../../database-function/pet-breed-func/add-breed');
const { getBreedCount } = require('../../database-function/pet-breed-func/get-breed');
const generateResponse = require('../../utils/generate-response');
const addBreedController = async (req,res,next)=>
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
             const breedId= uuid.v4();
             const data = {
            breedId,
            categoryId,
            name,
           purpose,
            price,
            imageUrl,
           
           
    };
    await addBreed(data);
    const breedCount = await getBreedCount();
    const updatedData = { ...data, breedCount };

    return res.send(generateResponse('breed added', updatedData));
    }
    catch(error)
    {
        return next(error);
    }
};
module.exports=addBreedController;
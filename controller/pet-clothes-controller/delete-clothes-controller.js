const uuid = require('uuid');
const {deleteClothes} = require('../../database-function/pet-clothes-func/delete-clothes');
const generateResponse = require('../../utils/generate-response');

const deleteClothesController = async(req,res,next)=>
{
    try
    {
      const {clothesId=' '} = req.body;
      const data =
      {
        clothesId
      };
      await deleteClothes(data);
      return res.send(generateResponse('deleted'));
    }
    catch(error)
    {
      return next(error);
    }
    
};
module.exports=deleteClothesController;
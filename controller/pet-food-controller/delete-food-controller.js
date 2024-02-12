// const uuid = require('uuid');
// const {deleteFood} = require('../../database-function/pet-food-func/delete-food');
// const generateResponse = require('../../utils/generate-response');
// const ApiError = require('../../utils/ApiError');
// const httpStatus = require('http-status');


const uuid = require('uuid');
const { deleteFood } = require('../../database-function/pet-food-func/delete-food');
const generateResponse = require('../../utils/generate-response');
//const admin = require('../../../config/firebase_config');

const deleteFoodController = async (req, res, next) => {
  
    try {
        const {
            body: {foodId = ''}}=req;
              
              const data = {foodId};

      await deleteFood(data);
      return res.send(generateResponse("deleted"));
    } catch (error) {
      return next(error);
    }
};
    
module.exports = deleteFoodController;









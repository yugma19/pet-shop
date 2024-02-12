
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const addCategoryValidator = checkSchema({
    
  category:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'category'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'category'),
    },
  }
  
});
module.exports = addCategoryValidator;

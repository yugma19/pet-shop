
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const updateFoodValidator = checkSchema({
  foodName:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'foodName'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'foodName'),
    },
  },
  productType: {
    exists: {
        errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'productType'),
      },
      isString: {
        errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'productType'),
      },
    },
   packageType: {
        exists: {
            errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'packageType'),
          },
          isString: {
            errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'packageType'),
          },
        },
        outfit: {
          exists: {
              errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'outfit'),
            },
            isString: {
              errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'outfit'),
            },
          },
  price: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace(
        '{{ input }}',
        'price',
      ),
    },
  }
  
});
module.exports = updateFoodValidator;


const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const addOrderValidator = checkSchema({
  customerName:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'customerName'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'customerName'),
    },
  },
 
  mobileNumber: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace(
        '{{ input }}',
        'price',
      ),
    },
  },
  foodId: {
    exists: {
        errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'foodId'),
      },
      isString: {
        errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'foodId'),
      },
  },
  clothesId: {
    exists: {
        errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'clothesId'),
      },
      isString: {
        errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'clothesId'),
      },
  },

    foodQuantity: {
      optional: true,
      isNumeric: {
        errorMessage: getMessage('INPUT_NUMERIC').replace(
          '{{ input }}',
          'foodQuantity',
        ),
      },
    },
    clothesQuantity: {
      optional: true,
      isNumeric: {
        errorMessage: getMessage('INPUT_NUMERIC').replace(
          '{{ input }}',
          'clothesQuantity',
        ),
      },
    }
});
module.exports = addOrderValidator;


const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const deleteFoodValidator = checkSchema({

    foodId: {
        exists: {
            errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'foodId'),
          },
          isString: {
            errorMessage: getMessage('INPUT-NUMERIC').replace('{{ input }}', 'foodId'),
          },
        }});
module.exports = deleteFoodValidator;

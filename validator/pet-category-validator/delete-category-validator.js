
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const deleteCategoryValidator = checkSchema({

    categoryId: {
        exists: {
            errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'categoryId'),
          },
          isString: {
            errorMessage: getMessage('INPUT-NUMERIC').replace('{{ input }}', 'categoryId'),
          },
        }});
module.exports = deleteCategoryValidator;

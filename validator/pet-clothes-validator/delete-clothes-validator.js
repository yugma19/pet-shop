
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const deleteClothesValidator = checkSchema({

    clothesId: {
        exists: {
            errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'clothesId'),
          },
          isString: {
            errorMessage: getMessage('INPUT-NUMERIC').replace('{{ input }}', 'clothesId'),
          },
        }});
module.exports = deleteClothesValidator;

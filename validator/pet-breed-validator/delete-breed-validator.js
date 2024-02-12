
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const deleteBreedValidator = checkSchema({

    breedId: {
        exists: {
            errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'breedId'),
          },
          isString: {
            errorMessage: getMessage('INPUT-NUMERIC').replace('{{ input }}', 'breedId'),
          },
        }});
module.exports = deleteBreedValidator;

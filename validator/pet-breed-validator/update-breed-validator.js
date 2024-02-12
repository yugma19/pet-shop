
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const updateBreedValidator = checkSchema({
  categoryId:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'categoryId'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'categoryId'),
    },
  },
  name:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'name'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'name'),
    },
  },
  purpose: {
    exists: {
        errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'purpose'),
      },
      isString: {
        errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'purpose'),
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
  },
  imageUrl:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'imageUrl'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'imageUrl'),
    },
  }
});
module.exports = updateBreedValidator;


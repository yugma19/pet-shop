
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const addClothesValidator = checkSchema({
    size:{
        exists: {
          errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'size'),
        },
        isString: {
          errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'size'),
        },
      },
  material:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'material'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'material'),
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
module.exports = addClothesValidator;

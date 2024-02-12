const uuid = require('uuid');
const {addOrder} = require('../../database-function/pet-order/add-order');
const {calculateAmt} = require('../../database-function/pet-order/total-amount');
const generateResponse = require('../../utils/generate-response');

const addOrderController = async(req,res,next)=>
{
    try
    {
      console.log('Request Body:', req.body);
       const
       {
          body:
          {
             customerName='',
             mobileNumber='',
             selectedItems=[],
             clothesId='',
             foodId='',
          }
       }=req;
      
       
       if (!Array.isArray(selectedItems)) {
           throw new Error('selectedItems must be an array');
       }
       const itemsData = selectedItems.map(item => ({
         foodName: item.foodName || '', 
         outfit: item.outfit || '', 
         quantity: item.quantity || 0 
     }));

    
     const prices = await calculateAmt(itemsData);
     const totalAmount = itemsData.reduce((total, item) => {
      let itemPrice = 0;
  
     
      if (item.foodName && prices[item.foodName]) {
          itemPrice += prices[item.foodName] * item.quantity;
      }
  
     
      if (item.outfit && prices[item.outfit]) {
          itemPrice += prices[item.outfit] * item.quantity;
      }

      return total + itemPrice;
  }, 0);
  

       const orderId = uuid.v4;
      
      const data =
      {
         orderId,
         customerName,
         mobileNumber,
         selectedItems,
         clothesId,
         foodId,
         totalAmount,
        
      }
      await addOrder(data);

     
    const result = { ...data,totalAmount};

    return res.send(generateResponse('order added',result));
    }

    catch(error)
    {
        return next(error)
    }
};
module.exports=addOrderController;
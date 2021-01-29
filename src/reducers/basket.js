const basketReducer = (state = [], action) => {
    
    switch(action.type)
    {
      case "ADD_BASKET": 
        let isExist=false;
        const product=action.payload;
        for (let purchase of state) {
            if(purchase.product_id===product.id)
            {
                purchase.amount++;
                purchase.cost+=Number(product.cost);
                isExist=true;
            }
        }
        if(!isExist)
        {
            let new_purchase={
                product_id:product.id,
                name: product.name,
                image: product.image,
                amount:1,
                cost:Number(product.cost)
            }
            state.push(new_purchase);
        }
        return state;
      case "REMOVE_BASKET":
          state=state.filter(purchase=>purchase.product_id!==action.payload);
        return state;
      case "DECREASE_BASKET":
        for (let purchase of state) {
          if(purchase.product_id===action.payload)
          {
              if(purchase.amount>1)
              {
                purchase.cost-=purchase.cost/purchase.amount;
                purchase.amount--;
                state=state.filter(c=>true);
              }
              else
              {
                state=state.filter(purchase=>purchase.product_id!==action.payload);
              }
          }
        }
        return state;
      case "INCREASE_BASKET":
          for (let purchase of state) {
            if(purchase.product_id===action.payload)
            {
              purchase.cost+=purchase.cost/purchase.amount;
              purchase.amount++;
              state=state.filter(c=>true);
            }
        }
        return state;
      case "CLEAR_BASKET":
          state=state.filter(purchase=>false);
        return state;
      default:
        return state;
    }
}

export default basketReducer;
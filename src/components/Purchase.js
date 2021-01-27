import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeNumProd,addBasket,removeBasket,decreaseBasket,increaseBasket} from '../actions';

const Purchase = () => {

    const dispatch=useDispatch();
    let itemsBasket = useSelector(state=>state.basket);
    const decreaseFromBasket = (id) => {
        dispatch(changeNumProd(-1));
        dispatch(decreaseBasket(id));
    }
    const increaseToBasket = (id) => {
        dispatch(changeNumProd(1));
        dispatch(increaseBasket(id));
    }
    const removeFromBasket = (num, id) => {
        dispatch(changeNumProd(-num));
        dispatch(removeBasket(id));
    }

    let itemRow = itemsBasket.map(item=>{
        return(
            <tr key={item.product_id}>
            <th>{item.name}</th>
            <th>{item.amount}</th>
            <th>{item.cost}</th>
            <th><button onClick={()=>decreaseFromBasket(item.product_id)}>-</button></th>
            <th><button onClick={()=>increaseToBasket(item.product_id)}>+</button></th>
            <th><button onClick={()=>removeFromBasket(item.amount,item.product_id)}>Remove</button></th>
        </tr>  
        )
    });
    
    return ( 
        <div className="purchase">
            <h1>Purchase</h1>
            <table className="purchase-table">
                <thead>
                    <tr>
                        <th>Name of Product</th>
                        <th>Amount</th>
                        <th>Cost</th>
                        <th>Reduce</th>
                        <th>Add</th>
                        <th>Remove</th>
                    </tr> 
                </thead>
               <tbody>
                   {itemsBasket && itemRow}
               </tbody>
            </table>
            
        </div>
        
     );
}
 
export default Purchase;
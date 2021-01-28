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
    const [customer_name,setCustomerName] = useState(null);
    const [customer_email,setCustomerEmail] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        for (const item of itemsBasket) {
            const boughtItem={
                customer_name: customer_name,
                customer_email: customer_email,
                product_id: item.product_id,
                amount: item.amount,
                cost: item.amount
            }

            const fetchOptions={
                method: 'POST',
                headers: {"Content-type":"application/json"},
                body: JSON.stringify(boughtItem)
            }

            const url='http://127.0.0.1:8000/api/purchase';
            fetchToBuy(url,fetchOptions);
        }
    }

    const fetchToBuy = async (url,options) =>{
        const response= await fetch(url,options);
        const data = await response.json();
        console.log(data);
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
            <h3>Buyer Info</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="customer_name">Name</label>
                <input type="text" name="customer_name" id="customer_name" required
                    onChange={(e)=>{setCustomerName(e.target.value)}}/>
                <label htmlFor="customer_email">Email</label>
                <input type="email" name="customer_email" id="customer_email" required
                    onChange={(e)=>{setCustomerEmail(e.target.value)}}/>
                <button className="big-purchase-button">Purchase</button>
            </form>
            
        </div>
        
     );
}
 
export default Purchase;
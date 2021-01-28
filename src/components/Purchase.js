import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeNumProd,removeBasket,decreaseBasket,increaseBasket,clearBasket} from '../actions';

const Purchase = () => {

    let itemsBasket = useSelector(state=>state.basket);
    const numInBasket = useSelector(state=>state.changeNumProd);
    const [customer_name,setCustomerName] = useState(null);
    const [customer_email,setCustomerEmail] = useState(null);
    const [messageToCustomer,setMessageToCustomer] = useState(null);

    const dispatch=useDispatch();
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
    const clearEntireBasket = (num) => {
        dispatch(changeNumProd(-num));
        dispatch(clearBasket());
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const itemsBoughtArray=[];

        for (const item of itemsBasket) {
            const boughtItem={
                customer_name: customer_name,
                customer_email: customer_email,
                product_id: item.product_id,
                amount: item.amount,
                cost: item.cost
                }
            
            itemsBoughtArray.push(boughtItem);
        }
        
        const sendToServer={itemsBoughtArray: itemsBoughtArray};

        const fetchOptions={
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(sendToServer)
        }

        const url='http://127.0.0.1:8000/api/purchaseMany';
        fetchToBuy(url,fetchOptions);
    }

    const sendBasketIntoLocalStorage = (basket) => {
            let totalCost=0;
            for (const item of basket) {
                item.date=new Date();
                totalCost+=item.cost
            }
        
        if(localStorage.getItem('purchase'))
            {
                const pastPurchases=JSON.parse(localStorage.getItem('purchase'));
                const newPurchase={
                    basket:basket,
                    totalCost:totalCost
                }
                pastPurchases.push(newPurchase);
                localStorage.setItem('purchase',JSON.stringify(pastPurchases));
            }
            else
            {
                const pastPurchases=[];
                const newPurchase={
                    basket:basket,
                    totalCost:totalCost
                }
                pastPurchases.push(newPurchase);
                localStorage.setItem('purchase',JSON.stringify(pastPurchases));
            }
            clearEntireBasket(numInBasket);
    }

    const fetchToBuy = async (url,options) =>{
        setMessageToCustomer(null);
        const response = await fetch(url,options);
        const data = await response.json();
        if(data==='Purchase is done!'){
           sendBasketIntoLocalStorage(itemsBasket);  
           setMessageToCustomer('Purchase was completed succsesfully!');
        } 
        else{
            setMessageToCustomer('There was error with purchase! Please try again.');
        }  
    }

    let itemRows = itemsBasket.map(item=>{
        return(
            <tr key={item.product_id}>
                <td><img src={item.image} alt="" className="small-img"/></td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.cost}</td>
                <td><button onClick={()=>decreaseFromBasket(item.product_id)}>-</button></td>
                <td><button onClick={()=>increaseToBasket(item.product_id)}>+</button></td>
                <td><button onClick={()=>removeFromBasket(item.amount,item.product_id)}>X</button></td>
            </tr>  
        )
    });
    
    return ( 
        <div className="purchase">
            <h1>User checkout:</h1>
            <table className="purchase-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name of Product</th>
                        <th>Amount</th>
                        <th>Cost</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr> 
                </thead>
               <tbody>
                   {itemsBasket && itemRows}
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

            <div className="message">{messageToCustomer}</div>
            
        </div>
        
     );
}
 
export default Purchase;
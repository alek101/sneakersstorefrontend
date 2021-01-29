import {formatPrice,formatDate} from '../format';

const Past = () => {
    let purchaseTables=null;
    const pastPurchases=JSON.parse(localStorage.getItem('purchase'));
    if(pastPurchases!==null)
    {
        purchaseTables = pastPurchases.map((purchase,i)=>{
            return(
                <div className="past-purchase" key={i}>
                    <table className="purchase-table" >
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name of Product</th>
                                <th>Amount</th>
                                <th>Cost</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {purchase.basket.map((item,j)=>{
                                return(
                                    <tr key={'table'+i+'row'+j}>
                                        <td><img src={item.image} alt="" className="small-img"/></td>
                                        <td>{item.name}</td>
                                        <td>{item.amount}</td>
                                        <td>{formatPrice(item.cost,'en-EN')}</td>
                                    </tr>  
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="belowe-table">Total cost of the purchase on {formatDate(purchase.date,'en-EN')} was {formatPrice(purchase.totalCost,'en-EN')}</div>
                </div>
            )
        });
    }
    
    return ( 
        <div className="purchase">
            <h1>Order History</h1>
            {pastPurchases && purchaseTables}
            
        </div>  
     );
}
 
export default Past;
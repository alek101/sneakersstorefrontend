const Past = () => {
    let purchaseTables=null;
    const pastPurchases=JSON.parse(localStorage.getItem('purchase'));
    if(pastPurchases!==null)
    {
        purchaseTables = pastPurchases.map((purchase,i)=>{
            return(
                <div className="past-purchase">
                    <table className="purchase-table" key={i}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name of Product</th>
                                <th>Amount</th>
                                <th>Cost</th>
                                <th>Date</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {purchase.basket.map((item,j)=>{
                                return(
                                    <tr key={'table'+i+'row'+j}>
                                        <td><img src={item.image} alt="" className="small-img"/></td>
                                        <td>{item.name}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.cost}</td>
                                        <td>{item.date.slice(0,10)}</td>
                                    </tr>  
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="belowe-table">Total cost of the purchase was: {purchase.totalCost}</div>
                </div>
            )
        });
    }
    
    return ( 
        <div className="purchase">
            <h1>Past Purchases</h1>
            {pastPurchases && purchaseTables}
            
        </div>  
     );
}
 
export default Past;
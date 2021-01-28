const Past = () => {
    let itemRows=null;
    const pastPurchases=JSON.parse(localStorage.getItem('purchase'));
    if(pastPurchases!==null)
    {
        itemRows = pastPurchases.map((item,i)=>{
            return(
                <tr key={i}>
                    <td><img src={item.image} alt="" className="small-img"/></td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{item.cost}</td>
                    <td>{item.date.slice(0,10)}</td>
                </tr>  
            )
        });
    }
    
    return ( 
        <div className="purchase">
            <h1>Past Purchases</h1>
            <table className="purchase-table">
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
                   {pastPurchases && itemRows}
               </tbody>
            </table>
        </div>  
     );
}
 
export default Past;
const Past = () => {
    let itemRows=null;
    const pastPurchases=JSON.parse(localStorage.getItem('purchase'));
    if(pastPurchases!==null)
    {
        itemRows = pastPurchases.map((item,i)=>{
            return(
                <tr key={i}>
                    <th>{item.name}</th>
                    <th>{item.amount}</th>
                    <th>{item.cost}</th>
                    <th>{item.date.slice(0,10)}</th>
                </tr>  
            )
        });
    }
    
    return ( 
        <div className="purchase">
            <h1>Past</h1>
            <table className="purchase-table">
                <thead>
                    <tr>
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
import {useState} from 'react';
import Product from './Product';

const Home = ({data}) => {

    const [nameFilter,setNameFilter] = useState("");
    let products=(data)? data.filter(product=>product.name.toLowerCase()
    .includes(nameFilter.toLowerCase()))
    .map((product,i)=><Product key={i} product={product} />):
    <div className="loading">Loading...</div>;
    if(products.length===0) products=<div className="loading">No search results...</div>;

    return ( 
        <div className="products">
            
            <div className="filter">
                <label htmlFor="name_filter">Filter</label>
                <input type="text" name="name_filter" id="name_filter"
                        onKeyUp={(e)=>{setNameFilter(e.target.value)}}/>  
            </div>
            <div className="product-list-body">
                <h1>We are offering</h1>
                <div className="product-list">
                    {products}
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;
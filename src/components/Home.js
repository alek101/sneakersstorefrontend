import {useState, useEffect} from 'react';
import Product from './Product';

const Home = () => {

    const [data, setData] = useState(null);
    // const [error, setError] =useState(null);
    const url='http://127.0.0.1:8000/api/products';

    useEffect(()=>{
        const abortController=new AbortController();
        fetch(url, {signal: abortController.signal})
        .then(res=>{
            if(!res.ok){
                throw Error(`Couldn't fetch the data`);
            }
            return res.json()
        })
        .then(res=>{
        //   console.log(res);
          setData(res);  
        })
        .catch(err=>console.log(err));

        // return () =>abortController.abort();
    },[])

    const products=(data)? data.map(product=><Product key={product.id} product={product} />):<div className="loading">Loading...</div>;

    return ( 
        <div className="products">
            <h1>Products</h1>
            <div className="product-list">
                {products}
            </div>
            
        </div>
        

     );
}
 
export default Home;
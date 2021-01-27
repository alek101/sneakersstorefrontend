import Product from './Product';

const Home = ({data}) => {

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
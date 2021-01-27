const Product = ({product}) => {
    console.log(product);
    return ( 
        <div className="product">
            <div className="product-name">{product.name}</div>
            <div className="product-image">
                <img src={product.image} alt=""/>
                </div>
            <div className="product-cost">{product.cost}</div>
            <button className="product-button">Add</button>
        </div>
     );
}
 
export default Product;
import {useDispatch} from 'react-redux';
import {changeNumProd,addBasket} from '../actions';
import {formatPrice} from '../format';

const Product = ({product}) => {
    const dispatch=useDispatch();
    const addToBusket = (product) => {
        dispatch(changeNumProd(1));
        dispatch(addBasket(product));
    }
    return ( 
        <div className="product">
            <div className="product-image">
                <img src={product.image} alt=""/>
                </div>
            <div className="product-name">{product.name}</div>    
            <div className="product-cost">Cost: {formatPrice(product.cost,'en-EN')}</div>
            <button className="product-button" onClick={() => addToBusket(product)}>
                <img src={"shooping-cart.png"} alt="" className="cart-img-button"/></button>
        </div>
     );
}
 
export default Product;
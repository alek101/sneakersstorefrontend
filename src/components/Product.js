import {useDispatch} from 'react-redux';
import {changeNumProd,addBasket} from '../actions';

const Product = ({product}) => {
    const dispatch=useDispatch();
    const addToBusket = (product) => {
        dispatch(changeNumProd(1));
        dispatch(addBasket(product));
    }
    return ( 
        <div className="product">
            <div className="product-name">{product.name}</div>
            <div className="product-image">
                <img src={product.image} alt=""/>
                </div>
            <div className="product-cost">{product.cost}</div>
            <button className="product-button" onClick={() => addToBusket(product)}>Add</button>
        </div>
     );
}
 
export default Product;
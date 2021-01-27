import {useSelector, useDispatch} from 'react-redux';
import {changeNumProd} from '../actions';

const Product = ({product}) => {
    console.log(product);
    const dispatch=useDispatch();
    return ( 
        <div className="product">
            <div className="product-name">{product.name}</div>
            <div className="product-image">
                <img src={product.image} alt=""/>
                </div>
            <div className="product-cost">{product.cost}</div>
            <button className="product-button" onClick={() => dispatch(changeNumProd(1))}>Add</button>
        </div>
     );
}
 
export default Product;
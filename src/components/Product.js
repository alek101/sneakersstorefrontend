import {useSelector, useDispatch} from 'react-redux';
import {changeNumProd,addBasket,removeBasket} from '../actions';

const Product = ({product}) => {
    const dispatch=useDispatch();
    const addToBusket = (product) => {
        dispatch(changeNumProd(1));
        dispatch(addBasket(product));
    }
    // const removeFromBasket =(id) =>{
    //     dispatch(removeBasket(id))
    // }
    return ( 
        <div className="product">
            <div className="product-name">{product.name}</div>
            <div className="product-image">
                <img src={product.image} alt=""/>
                </div>
            <div className="product-cost">{product.cost}</div>
            <button className="product-button" onClick={() => addToBusket(product)}>Add</button>
            {/* <button onClick={()=> removeFromBasket(product.id)}>Remove test</button> */}
        </div>
     );
}
 
export default Product;
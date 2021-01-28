import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';


const Header = () => {
    const numberProd = useSelector(state=>state.changeNumProd);

    return ( 
        
        <nav className="header">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/purchase"> <img src={"shooping-cart.png"} alt="" className="cart-img"/> {numberProd}</Link>
                <Link to="/past">Order History</Link>
            </div>
        </nav>
     );
}
 
export default Header;
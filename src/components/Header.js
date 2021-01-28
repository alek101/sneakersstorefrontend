import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

const Header = () => {
    const numberProd = useSelector(state=>state.changeNumProd);

    return ( 
        
        <nav className="header">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/purchase">User Checkout</Link>
                <Link to="/past">Past Purchases</Link>
            </div>
            <div className="counter">
                Number of items in basket: {numberProd}
            </div>
        </nav>
     );
}
 
export default Header;
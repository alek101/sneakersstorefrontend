import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {changeNumProd} from '../actions';

const Header = () => {
    const numberProd = useSelector(state=>state.changeNumProd);

    return ( 
        
        <nav className="header">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/purchase">Purchase</Link>
                <Link to="/past">Past Purchase</Link>
            </div>
            <div className="counter">
                Bought: {numberProd}
            </div>
        </nav>
     );
}
 
export default Header;
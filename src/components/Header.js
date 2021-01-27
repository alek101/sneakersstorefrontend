import { Link } from "react-router-dom"

const Header = () => {
    return ( 
        <nav className="header">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/purchase">Buy</Link>
                <Link to="/past">Past Purchase</Link>
            </div>
        </nav>
     );
}
 
export default Header;
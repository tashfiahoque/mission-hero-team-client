import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css';

const Navbar = () => {
    // const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [user, setuser] = useContext(UserContext);
    // const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    // const [checkAdmin, setCheckAdmin] = useState(null)
    const handleLogOut = () => {
        setuser({});
    }
    return (
        <nav className="container">
            <ul>
                <li><Link className="nav-link" to="/home" >Home</Link></li>
                {user.name && <h6 style={{ color: '#D3A21F' }}>{user.name}&nbsp;&nbsp;</h6>}
                {user.name || user.email
                    ? <li className="nav-item active mainNav__hover">
                        <Link className="nav-link" to="/" onClick={handleLogOut}>Log out</Link>
                    </li>
                    : <li className="nav-item active mainNav__hover">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>}
                {/* <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a class="active" href="#">Sign Up</a></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
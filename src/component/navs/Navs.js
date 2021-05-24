import React , {Component} from 'react';
import './Navs.css';
import {Link} from 'react-router-dom';
import { FaAlignJustify , FaMedium} from "react-icons/fa";
class Nav extends Component {
    state = {
        isOpen : false
    };
    HandleToggle = () =>{
        this.setState({isOpen: !this.state.isOpen});
    };
    render(){
        return(
            <nav className="navbar">
                <div className="contain">
                    <button type="button" className="nav-btn" onClick={this.HandleToggle}>
                        <FaAlignJustify className="nav-icon" />
                    </button>
                    <span><FaMedium/></span>
                    <Link to="/" className="nav-logo">
                        <p>CIVILSOFT<small>HCMS</small></p>
                    </Link>
                    <div className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>    
                        <ul>
                            <li onClick={this.HandleToggle}><Link to="/">Post Leave Request</Link></li>
                            <li onClick={this.HandleToggle}><Link to="/manageleaverequest">Manage Leave Request</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav;
import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import Home from "../pages/home.js";
import Shop from "../pages/shop.js";
import About from "../pages/About.js";


const Header = () => {

    return(
        <Router>
        <div className="header">
        
             <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li> 
                </ul>
            </nav>
            <Routes>
            
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} /> 
     
            </Routes>
       
        </div> 
        </Router> 
    )
}

export default Header;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


//Pages
import Home from "./pages/home.js";
import Shop from "./pages/shop.js";
import About from "./pages/About.js";

//components
import Header from "./components/Header.js";

function App() {
  return (
    
        <div className="App">
            {/* Navigation Menu */}
        <Router>    
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

            {/* Routes */}
            
            <Routes> 
            
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} /> 
         
            </Routes> 
        </Router>      
        </div>
      
    );
}

export default App;

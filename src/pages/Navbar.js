import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
             <li>
                 <Link to="/contact">Contact</Link>
             </li>
            </ul>
        </nav>
    );
}

export default Navbar;
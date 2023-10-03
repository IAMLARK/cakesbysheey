import { Component, ReactNode } from "react";
import { menudata } from "./menudata";

class Navbar extends Component{
    render() {
        return(
          <nav className="navbaritems">
            <h1>
                Cakes by Sheey <i className="fa-sharp fa-solid fa-cake-candles"></i>
            </h1>
            <ul>
                <li><a href="#"><i className="fa-solid fa-house-user"></i>Home</a></li>
                <li><a href="#"><i className="fa-solid fa-circle-info"></i>About</a></li>                        
                <li><a href="#"><i className="fa-solid fa-briefcase"></i>Service</a></li>                        
                <li><a href="#"><i className="fa-solid fa-address-book"></i>Contact</a></li>                        
            </ul>
          </nav>
        ) 
    }
}
export default Navbar;
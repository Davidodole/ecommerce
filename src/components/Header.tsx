import "./Header.css"
import logo from "../image/icon.png";
import { useState } from "react";


function Header(){

    const [isActive, setIsActive] = useState(false);

    function handleBtn(){
        
        setIsActive(!isActive)
    };

    return(
        <>
        <div className="navbar">
            <div className="nav_icon">
            <img src={logo} alt="" /> 
            <p>GBsquare</p>  
            </div>
            <ul className={isActive ? "open": ""}>
                <li><a href="/">Shop</a></li>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">Kid</a></li>
            </ul>
            <div className="login">
                <button type="submit">Login</button>
                <div className="icon">
                <i className="fa-solid fa-2x fa-cart-shopping"></i>
                </div>
            </div>
            <button onClick={handleBtn}><i className="fa-solid fa-bars"></i></button>
        </div>
        </>
    )
}

export default Header
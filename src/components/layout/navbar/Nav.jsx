import React from "react";
import "Nav.scss";


const Nav = () =>{
    return(
        <div className="Nav">
            <div className="nav__row">
                <div className="nav__row-logo">
                    <h2>Sneak</h2>
                </div>
                <div className="nav__row-navbar">
                    <p>Home</p>
                    <p>Collection</p>
                    <p>Shoes</p>
                    <p>Racing Boots</p>
                    <p>Contact</p>
                    <div className="loop"></div>
                    <div className="cart"></div>
                </div>
            </div>
        </div>
    )
}

export default Nav;
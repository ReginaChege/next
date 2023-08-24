import React from "react";

const Navbar=()=>{
    return(
        <nav className="flex justify-center  space-x-4 m-20">
            <span className="foodie">Foodie</span>
            <a href="home" className="home">Home</a>
            <a href="offer">Offer</a>
            <a href="sevice">Service</a>
            <a href="menu">Menu</a>
            <a href="about us">About Us</a>
            <a href="login" className="text-primary">Login</a>
            <button className="text-primary border-2 border-rose-600">Sign up</button>
        </nav>
    )
}

export default Navbar;
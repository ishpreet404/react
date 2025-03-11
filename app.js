import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => (
    <div className="Header">
        <div className="logo-container">
        <img className="logo" src="https://www.shutterstock.com/shutterstock/photos/1534626221/display_1500/stock-vector-hand-drawn-isolated-indian-food-icon-color-fill-illustration-of-indian-dish-rice-with-lentils-1534626221.jpg"/>
        </div>
        <div className="navbar-items">
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Cart</li>
            </ul> 
        </div>
    </div>
); 
const Restaurant = () => (
    <div className="res-card">
        <img alt="cardlogo" className="cardimg" src="  https://recipesblob.oetker.in/assets/6c0ac2f3ce204d3d9bb1df9709fc06c9/1272x764/shahi-paneer.jpg"/>
        <h3>Haldiram</h3> 
        <h4>Shahi Paneer</h4>
        <h4>4.9 stars</h4>
        <h4>28 mins</h4>
    </div>
)
const Body = () => (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-cont">
           <Restaurant/>   <Restaurant/>   <Restaurant/>   <Restaurant/>   <Restaurant/>   <Restaurant/> 
        </div>
    </div>
)
const Appcompent = () => (
    <div class="app">
        <Header></Header>
        <Body></Body>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcompent/>);
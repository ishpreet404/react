import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/body.js";



  const Appcompent = () => (
    <div class="app">
        <Header></Header>
        <Body></Body>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcompent/>);


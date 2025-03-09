import React from "react";
import ReactDOM from "react-dom/client";
const head =[React.createElement("h1",{id:"h"},"I am h1"),React.createElement("h2",{id:"h"},"I am h2")]; //solution JSX
const child =React.createElement("div",{id:"child"},head);
const parent = React.createElement("div",{id:"parent"},child);
const root =ReactDOM.createRoot(document.getElementById("root")); 
root.render(parent); //react is only working in the root div 

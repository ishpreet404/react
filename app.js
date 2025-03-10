import React from "react";
import ReactDOM from "react-dom/client";
//JSX is not html in js it is a html like syntax 
const jsxheading = <h1>This is a jsx heading</h1>
const root = ReactDOM.createRoot(document.getElementById("root")); // parcel transpiles this code and browser is unable to understand the code as it runs on ECMAscript6
root.render(jsxheading);


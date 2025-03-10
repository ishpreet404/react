import React from "react";
import ReactDOM from "react-dom/client";
//JSX is not html in js it is a html like syntax 
const jsxheading = <h1 className="root" tabIndex="5"> This is a jsx heading</h1>
const root = ReactDOM.createRoot(document.getElementById("root")); // parcel transpiles this code and browser is unable to understand the code as it runs on ECMAscript6 using babel
//React Components 
//Classbases components -OLD
//Functional components -NEW
const Title = ()=> (
    <h1>parsing one compenent block into another</h1>
);
const nm = 100;
const Headingcompenent = ()=> ( // component composition    
    <div>    
    <Title/>  
    {Title()}
    <Title></Title>
    {jsxheading} 
    {/* if a malacious api call is made jsx prevents injection attacks  */}
    {nm}
     <h2>functional compenent </h2>
    </div>
)
root.render(<Headingcompenent/>);


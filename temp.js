// const heading = document.createElement("h1");
// heading.innerHTML="Hello world from javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);
// const head =[React.createElement("h1",{id:"h"},"I am h1"),React.createElement("h2",{id:"h"},"I am h2")]; //solution JSX
// const child =React.createElement("div",{id:"child"},head);
// const parent = React.createElement("div",{id:"parent"},child);
// const root =ReactDOM.createRoot(document.getElementById("root")); 
// root.render(parent); //react is only working in the root div 
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


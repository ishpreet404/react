const head =React.createElement("h1",{id:"h"},"I am h1");
const child =React.createElement("div",{id:"child"},head);
const parent = React.createElement("div",{id:"parent"},child);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
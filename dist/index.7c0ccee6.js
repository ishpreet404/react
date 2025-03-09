const head = [
    React.createElement("h1", {
        id: "h"
    }, "I am h1"),
    React.createElement("h2", {
        id: "h"
    }, "I am h2")
]; //solution JSX
const child = React.createElement("div", {
    id: "child"
}, head);
const parent = React.createElement("div", {
    id: "parent"
}, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //react is only working in the root div 
 // react element is a object that browser understands
 //two types of dependecies dev and normal -D => dev dependecy 
 // ^ caret or ~ tilde will automatically upgrade the version ^ minor update ~ major update 
 //package lock keeps the track via hash on local and production 
 //transative dependecies => node modules

//# sourceMappingURL=index.7c0ccee6.js.map

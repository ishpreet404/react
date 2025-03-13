// react element is a object that browser understands
//two types of dependecies dev and normal -D => dev dependecy 
// ^ caret or ~ tilde will automatically upgrade the version ^ minor update ~ major update 
//package lock keeps the track via hash on local and production 
//transative dependecies => node modules
we can regenerate the node modules with package.json and package.lock.json  
if we want to execute a package we use npx and if we instal a package we use npm 
fetching from cdn is not a goodway to use react 
parcel is doing hmr (hot module replacement) 
it uses a file watching algorithm written in c++
parcel is caching things up and reduces the build time
parcel will do image optimization minimization and bundling/compressing 
tree shaking - removes unused code


config driven ui 
key should be assigned whenever using a map function
never use indexes as the keys
TWO TYPES OF EXPORTS
DEFAULT 
NAMED 
EXPORT (VAR)
IMPORT {VAR}
CAN WE USE BOTH????
hw
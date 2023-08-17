import React from 'react'

/* 1 */ 

// function App() {   
//   return <h1>My Amazing Blog</h1>; 
// }

// function App() {
//     return React.createElement("h1", null, "My Amazing Blog");
// }

// React.createElement(
//   type, // which kind of element you want to create
//   [props], // what data and attributes the element has access to
//   [...children] // what elements does this element wrap OR what should be nested 
// within this element
// )


/* 2 */ 

// function App() { 
//   return (
//     <div>
//         <h1>My Amazing Blog</h1> 
//     </div>
//   )
// }

// function App() {
//   return React.createElement(
//     "div",
//     {style: {border: "2px solid blue", textAlign: "center"}},
//     React.createElement("h1", null, "My Amazing Blog")
//   );
// }

/* 3 */ 

// function App(props) { 
//    return (
//         <div>
//           <h1>
//               <a href="/">My Amazing Blog</a>
//           </h1> 
//         </div>
//    )
// }

// function App(){
//      return React.createElement("div", {style: {border: "2px solid blue", textAlign: "center"}}, 
//                 React.createElement("h1", {}, 
//                     React.createElement("a", {href: "/"},  "My Amazing Blog")));
    
// }

/* 4 */ 

// function App(props) { 
//    return <h1>Welcome back, {props.name}</h1> 
// }

function greetUser(props) { 
   return React.createElement('h1', null, `Welcome back, ${props.name}`)
}

function App(props){
    return React.createElement(greetUser, {name: props.name}, null);
}


export default App;
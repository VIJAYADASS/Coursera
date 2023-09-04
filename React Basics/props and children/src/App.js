import React from 'react';

function Highlighter(props){
  const highlightStyles = {
    background: "yellow",
    padding: "10px", 
    fontWeight: "bold"
  }
  return (
    <div style={highlightStyles}>
      {props.children}
    </div>
  )
}

function BlogEntry(){
  return (
    <div>
      <h2>Cory's Coding Blog</h2>
      <p>Read on for tips on how to study for coding interviews..."</p>
    </div>
  )
}

function App(){
  return (
    <Highlighter children={<BlogEntry/>}/>
    
    // or
    
    // <Highlighter>
    //   <BlogEntry/>
    // </Highlighter>
    
    // <div>
    //   <Highlighter><h1>Pride and Prejudice</h1></Highlighter>
    //   <h2>By Jane Austen</h2>
    //   <Highlighter><img src="bookimg.jpg"></img></Highlighter>
    //   <Highlighter><p>It is a truth universally acknowledged, that a single man in possession 
    //     of a good fortune, must be in want of a wife.</p></Highlighter>
    // </div>  
  )
}
export default App;

/*  Practice 

1. Create a component called Button that uses props.children to display 
a child element as a button. 

You should be able to render your component in <App/> like this: 

<Button>Click me, I am transformed into a button!</Button>
// App.js

//  coding

import React from 'react';
import Button from './Button';

function App() {
  return (
    <div>
      <Button>Click me, I am transformed into a button!</Button>
    </div>
  );
}

export default App;

 
 */
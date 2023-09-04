import React from 'react';

function App(props){ 
  function handleClick(){
    console.log("Hello, I'm a function outside of the click event!")
  }
  return (
    <div>
      // <button onClick={function(){ console.log("Hello, anonymous function!")}}>
      //   Hello, anonymous function!
      // </button>
      <button onClick={() => { console.log("Hello, arrow function!")}}>
        I have finished this lesson!
      </button>
      <button onClick={handleClick}>
      I have finished this lesson!
      </button>
    </div>
  )
}

export default App;

/* Task 

Create a button that, when clicked, logs "I have finished this lesson!" to the console. Try accomplishing this task in two ways: use an arrow function and by defining a function outside of the click event. 

*/


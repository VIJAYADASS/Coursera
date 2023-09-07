 import React from 'react';
import './App.css';

function App() {
  return(
    <div className='App'>
      <form>
        <fieldset>
          <div className='Feild'>
            <label>Name</label>
            <input type='text' placeholder='Name' name='name' />
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
  
}

export default App;

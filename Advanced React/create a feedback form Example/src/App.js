 import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <h2>Feebback Form</h2>
          <div className='Feild'>
            <label>Score: </label>
            <input type='range' min="0" max="10" />
            
          </div>
          <button type='submit' >Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

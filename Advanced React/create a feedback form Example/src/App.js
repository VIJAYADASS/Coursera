 import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const[score , SetScore] = useState("10");

  return (
    <div className="App">
      <form>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className='Feild'>
            <label>Score: {score}  </label>
            <input 
              type='range'  
              min="0" 
              max="10" 
              value={score}
              onChange={e => SetScore(e.target.value)}
            />
            
          </div>
          <button type='submit' >Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

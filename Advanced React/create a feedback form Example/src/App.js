 import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const[score , SetScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10)  {
      alert("please provide a comment explaning why the expericene was poor. ")
      return;
    }
      console.log("Form Submitted!");
      setComment("");
      SetScore("10");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
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
          <div className='Field'>
            <label>Comment:  </label>
            <textarea value={comment} onChange={e => setComment(e.target.value)} />

          </div>
          <button type='submit' >Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

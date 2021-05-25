import React, { useEffect } from 'react';
import './App.css';
import { getQuizDetails } from './services/quiz_services'

function App() {

  useEffect(() => {
    getQuizDetails(5, 'easy')

    async function fetchData() {
      const questions = await getQuizDetails(5, 'easy');
      console.log(questions); 
    }
    fetchData()
  }, [])


  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;

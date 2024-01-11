import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [catFact, setCatFact]= useState("");

  const changeFact=()=>{
    axios.get("https://catfact.ninja/fact")
    .then((res)=>{
      console.log(res.data.fact)
      setCatFact(res.data.fact)
    }).catch((err)=>{
      console.log( err )
    })
  }

  useEffect(()=>{
    changeFact();
  }, [])

  return (
    <div className="App">
      <p>{catFact}</p>
      <button onClick={changeFact}>Change fact</button>
    </div>
  );
}

export default App;

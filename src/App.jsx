import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import axios from 'axios';
import Counter from './Counter';

function App() {
  const [abilities, setAbilities] = useState([])
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/ability/').then(response=>{
      setAbilities(response.data.results)
    })
  },[])
  
  return (
    <>
      {
        abilities.map((ability, index)=>(
          (<ul>
            <li>Ability: {ability.name}</li>
            <li>Ability url: {ability.url}</li>
          </ul>)
        ))
      }
      <Counter/>
    </>
  )
}

export default App

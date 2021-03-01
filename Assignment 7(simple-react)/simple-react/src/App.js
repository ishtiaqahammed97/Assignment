import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import playerData from './Components/fakeData/fakeData.json';
import Displayinfo from './Components/displayPlayer/Displayinfo';
import Selected from './Components/Seleccted/Selected';
// import bootstrap from './Components/Bootstrap/Navigation'
// import Navigation from './Components/Bootstrap/Navigation';

function App() {
  
  const [player, setPlayer] = useState([]);
  const [selected, setSelected] = useState([]);
  
  useEffect (() => {
    setPlayer(playerData);
  },[])

    const handleAddPlayer = (players) =>{
    console.log("added", players)
    const newSelected = [...selected, players];
    setSelected(newSelected);
    
  }

  return (
    <div className="App">
      <h2>Squad:{playerData.length}</h2>
      {/* <h3>Playing:{selected.length}</h3> */}
      {
        playerData.map(players => <Displayinfo key={players.id} players={players} handleAddPlayer={handleAddPlayer} > </Displayinfo>)
      }  
      <Selected selected={selected}></Selected>
      
     
       </div>
  );
}

export default App;

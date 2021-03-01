import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import './Displayinfo.css'

const displayinfo = (props) => {
   const {name, team,image, salary}  = props.players;
   const handleAddPlayer = props.handleAddPlayer;
    
    return (
        <div className="squad-container">
            <img src={image} alt=""/>
            <h3>Player : {name}</h3> 
            <h4>Team : {team}</h4>
            <h5>Salary: {salary}</h5>
            <button onClick={()=> handleAddPlayer(props.players)}><FontAwesomeIcon icon={faTrophy} /> Select </button>


        </div>
        
    );
};

export default displayinfo;
import React from 'react';
import './Selected.css'

const Selected = (props) => {
    const selected = props.selected;
    // console.log(selected);
    // const totalSalary = selected.reduce((sum, player)=> sum + player.salary, 0);
    let totalSalary = 0;
    for (let i = 0; i < selected.length; i++) {
        const players = selected [i];
        totalSalary = totalSalary + players.salary;
        console.log(totalSalary);
        
    }
   
    return (
        <div className="selected-container">
            <h1>Total Selected: {selected.length}</h1>
            <h5>Total Salary :{totalSalary}</h5>
            <h1>Playing Eleven : {selected.name}</h1>
        </div>
    );
};

export default Selected;
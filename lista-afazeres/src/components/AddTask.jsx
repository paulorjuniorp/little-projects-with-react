import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({handleTaskAddiction}) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (event) =>{
        setInputData(event.target.value);
    }

    const handleAddTasckClick = ()=>{
        handleTaskAddiction(inputData);
        setInputData('');
    }

    return ( 
        <div className="ask-task-container">
            <input 
                onChange={handleInputChange}
                value={inputData}
                className="add-task-input"
                type="text"
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTasckClick}>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;
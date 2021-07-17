import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';

const TaskDetails = () => {
    const params = useParams();

    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return(
        <>
            <div className="back-button-details">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Sorvete galera</p>
            </div>
        </>
    )
}

export default TaskDetails;
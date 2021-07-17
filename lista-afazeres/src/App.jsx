import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import './App.css';
import TaskDetails from './components/TaskDetails';

const App = () =>{ 

      const [tasks, setTasks] = useState([]);
      
      useEffect(() => {
        const fetchTasks = async () => {
          const { data } = await axios.get(
            "https://jsonplaceholder.cypress.io/todos?_limit=10"
          );
    
          setTasks(data);
        };
    
        fetchTasks();
      }, [])

      const handleTaskClick = (taskId) =>{
        const newTask = tasks.map((task)=>{
          if(task.id === taskId){
            return {...task, completed: !task.completed}
          }
          
          return task;
        })
        setTasks(newTask);
      }

      const handleTaskAddiction = (taskTitle) =>{
        const newTask = [...tasks, {
          title: taskTitle,
          id: uuidv4,
          conpleted: false
        }];

        setTasks(newTask);
      }

      const handleTaskDeletion = (taskId) => {
        const newTask = tasks.filter(task => task.id !== taskId)

        setTasks(newTask);
      }

      return(
        <Router>
          <div className="container">
            <Header />
            <Route path="/" exact render={()=>(
              <>
                <AddTask
                  handleTaskAddiction={handleTaskAddiction}
                />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}  
                />
              </>
            )}/>

            <Route path="/:taskTitle" exact component={TaskDetails}/>
            
          </div>
        </Router>
      );
};

export default App;
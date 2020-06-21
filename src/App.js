import React from 'react';

import './App.css';
import First from './components/First'
import TasklistcontextProvider from './context/Tasklistcontext'

import Taskform from './components/Taskform'
import './App.css'

class App extends React.Component{
  render(){
    return(
      <TasklistcontextProvider>
        <div className="outher-container">
               <div className="inner-container">
        <Taskform/>
        <First/>
        </div>
        </div>
   
 
      </TasklistcontextProvider>

     
         
   
        
         
    
   
     
      
    )
  }}

export default App

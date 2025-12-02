import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm';
import DisplayFunc  from './components/DisplayFunc';
export default function App(){
  const [queue,setQueue]=useState([]);

  const addToQueue =(data)=>{
    // Queue will be ADDED
    setQueue([...queue,{...data,
      id:Date.now(),
      status:"Waiting"
    }]);
    // console.log(queue);
    // It is async so states does not get immediatley updated 
  }
  const removeFromQueue =(id)=>{
    // Queue will be REMOVED
  }
  const updateQueue =(id)=>{
    // Queue will be UPDATED
  }

  
  return <div>
    <header>
      <h1 className="header">Queue Management System</h1>
      <p className="subheader">Manage your customer efficiently</p>
    </header>
    <main>
      {/* Two Components will be there  */}
      {/* Queue Form  + Display Component*/}
      <QueueForm onAdd={addToQueue}/>
      <DisplayFunc/>
    </main>

  </div>
}
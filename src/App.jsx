import { useState } from 'react'
import './App.css'
export default function App(){
  const [queue,setQueue]=useState([]);

  const addToQueue =(data)=>{
    // Queue will be ADDED
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

  </div>
}
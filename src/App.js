
import { useState } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard';
import Graph from './Component/Graph';
import Home from './Component/Home';

function App() {
  const [togg,setTogg]=useState(false)
  return (
    <div className="App shadow w-[70%] m-auto focus:bg-black py-4 px-4">
   
     {/* <Home/> */}
     <Dashboard setTogg={setTogg} togg={togg}/>
    {
      togg&& <Graph /> 
    }
    </div>
  );
}

export default App;

import React, { useContext } from 'react'
import { Contextapi } from '../ContextAPI/Contextprovider';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab4 from './Tab4';
import Tab3 from './Tab3';



function Graph({setTogg}) {
  
  const {tabvalue}=useContext(Contextapi);
  console.log(tabvalue)
  return (
    <div className='w-[100%] m-auto mt-4'>
  {tabvalue == "1" ? <Tab1/> : tabvalue ==="2" ? <Tab2/> : tabvalue==="3"?<Tab3/> :tabvalue==="4"?<Tab4/>:null}

    </div>
  )
}

export default Graph

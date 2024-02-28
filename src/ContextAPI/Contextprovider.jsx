import React, {  createContext, useState } from 'react'

export const  Contextapi=createContext()
function Contextprovider({children}) {
    const [tabvalue,setTabvalue]=useState(1);
    console.log(tabvalue)
  return (
    <div>
      <Contextapi.Provider value={{tabvalue,setTabvalue}}>
        {children}
      </Contextapi.Provider>
    </div>
  )
}

export default Contextprovider

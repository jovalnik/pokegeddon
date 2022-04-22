import { useState, useEffect } from 'react'
import './App.css'

 
  function PokeNick( props) {
    
  const {  index, myTeam } = props  
 let myIndex=-1;

 
return (

  <div className="contains-nick"> 

    <div  >
 
       Nickname: {myTeam[index].nick}  
       </div>
       </div>
  )
}

export default PokeNick

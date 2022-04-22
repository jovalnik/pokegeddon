import { useState, useEffect, useRef } from 'react'
import './App.css'
 
 
  function PokeInput( props) {
     
     
  const {dummy, setDummy, index,   hideInput, setHideInput,  myTeam, setMyTeam, showNick, setShowNick,  thisPoke  } = props  
 
  const [clicked, setClicked]=useState(false)
   const [nick, setNick]=useState(myTeam[index].nick)

 
return (
    <div  className="hidemetoo"  onClick={(e) => e.stopPropagation()}>

<input type="text" className={showNick} onChange=
        {event => 
          {
 
            setDummy(true)
            let enterName=event.target.value
 
            let enterNumber=myTeam[index].uniqueId

            let newEntry={...thisPoke, nick: enterName, uniqueId: enterNumber  }
 
            let tempTeam=myTeam
            tempTeam[index]=newEntry
 
            setMyTeam(tempTeam)
          }
              
        }	/>

      <button className={showNick} onClick=
       {event => 
 
        {
          setNick(myTeam[index].nick)
 
             setClicked(true)
 
          if ( dummy   ){ 
 
              setHideInput("hide")
              setShowNick("hide") 
 
          }
              else
              { 
                setHideInput("dont-hide")
                setShowNick("dont-hide")
              }
        }      
      }>   
      setNick
      </button>
 
    </div>
  )
}

export default PokeInput

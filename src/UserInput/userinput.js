import React from 'react'

function Userinput(props) {
    
    const style = {
        border: "2px solid red",
        width: "200px",
        margin: "5% auto"
    }
    
    return <input style={style} onChange={props.change} value={props.currentusername} type="text" />
            
                
            
        
    }

export default Userinput;

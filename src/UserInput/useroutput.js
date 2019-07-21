import React from 'react'
import '../UserInput/useroutput.css'

 function Useroutput(props) {
    return (
        <div className="useroutput">
            <p>Username: {props.username}</p>
            <p>my name is ikechukwu</p>
            
        </div>
    )
}

export default Useroutput;

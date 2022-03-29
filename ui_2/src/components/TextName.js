import React, {useState} from 'react';
import TextField from "@mui/material/TextField"

function TextName () {
    const [first_name, set_first_name] = useState("")
    const [last_name, set_last_name] = useState("User Not Found")
  
    return (
      <div>
        <div className='input'>
          <h1>Input here</h1>
          <label> First name (Sofie) </label>  
                <TextField value={first_name}
                  onChange={(e) => {
                    set_first_name(e.target.value);
                    //fetch("http://127.0.0.1:5000/input/" + e.target.value)
                    fetch("/input/" + e.target.value)             // connected to server  
                    .then(response => response.json())            // setting to json format
                    .then(data => {set_last_name(data.output)})   // set data to 
                    .catch(error => {set_last_name(error)})       // catch error if error
                  }
                }
              />          
        </div>

        <div className='output'>
          <h1>Output here</h1>
          <label> From server </label>
            <TextField variant="outlined" value={last_name} />
        </div>
      </div>

    );
    
  }

  export default TextName;
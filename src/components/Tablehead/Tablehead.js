import React from "react";
import "./style.css";


function Tablehead (props) {
    return<thead>
      <tr >
        <th className=".col-3" scope="col"><strong >Image:</strong></th>
        <th  className=".col-3" scope="col"><strong>Name:</strong></th>
        <th className=".col-3" scope="col"><strong>Occupation:</strong></th>
        <th className=".col-3" scope="col"><strong>Location:</strong></th>
      </tr>
      </thead>

  }
  
  export default Tablehead;
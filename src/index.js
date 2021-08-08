import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

/*-----react challenge-3 ------*/

let greetng = {};

const now = new Date();
const time = now.getHours();
let greet = '';

if(time >= 1 && time < 12 ){
  greet="Morning";
  greetng.color = "green";
}
else if(time >= 12  && time < 19){
  greet = "Afternoon";
  greetng.color = 'orange';
}
else{
  greet = "Night";
  greetng.color = "black";
}


ReactDOM.render(
  <>
  {/* <h3> {`time is ${time}`} </h3> */}

  <div>
  <h1> Hello Sir/Ma'am,
  <span style = {greetng} >
  {`  Good ${greet},`} 
  </span></h1>
  </div>
  </>,
  document.getElementById('root')
);
import React, { useState } from 'react';
import Black from "./Black.css";

const App = () => {

let purple = '#ff00aa77';

const [color,bgColor]=useState(purple);
const [name,newName]=useState("click");


const bg= () => {
  let bgCol='#A52A2A';
  bgColor(bgCol);
  newName("oooch!!! ");

};

 const three=  () => {
 bgColor(purple);
newName("wowww!!!");
 }

  return (
    <>
    <div style={{backgroundColor: color}} className="red">
    <button onClick={bg} onDoubleClick={three}> {name} </button>
    </div>
    </>
    
  )
}

export default App;
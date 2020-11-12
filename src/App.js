import React, { useState } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min";


function App() {

  const [Radius,setRadius]=useState(0);
  const [Hor,setHor]=useState(10);
  const [Vert,setVert]=useState(10);
  const [Blur,setBlur]=useState(10);
  const [Color,setColor]=useState("grey");
  const [Check,setCheck]=useState(false);


  return (
    <>
    <h3 className="heading">Box Shadow Generator</h3>
    <div className="App">
      <div className="output">
        <div className="box" style={{boxShadow:`${Check ? "inset":""} ${Hor}px ${Vert}px ${Blur}px ${Color}`, borderRadius:`${Radius}%`}}>
        <code className="code">
          border-radius: {Radius}%;<br/>
          box-shadow: {Hor}px {Vert}px {Blur}px {Color};
        </code>
        </div>
      </div>
      <div className="controls" style={{boxShadow:`${Check ? "inset":""} ${Hor}px ${Vert}px ${Blur}px ${Color}`}}>
      <label>Border Radius</label>
          <input type="range" value={Radius} onChange={(e)=>setRadius(e.target.value)} min="0" max="100" />
        <label>Horizontal Length</label>
          <input type="range" value={Hor} onChange={(e)=>setHor(e.target.value)} min="-100" max="100" />
        <label>Vertical Length</label>
          <input type="range" value={Vert} onChange={(e)=>setVert(e.target.value)} min="-100" max="100" />
        <label>Blur</label>
          <input type="range" value={Blur} onChange={(e)=>setBlur(e.target.value)} min="0" max="100" />
          <br /><br />
        <label>Color : </label>
          <input type="color" value={Color} onChange={(e)=>setColor(e.target.value)} />
          <br /><br />
          <div className="switch">
            <label>
              Outline
              <input type="checkbox" checked={Check} onChange={()=>setCheck(!Check)} />
              <span className="lever"></span>
              Inset
            </label>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;

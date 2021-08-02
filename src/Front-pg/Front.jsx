import "./FrontStyle.css";
import Front2 from "./Front2";
import {useState} from "react";

const Front = () => {
  const [load , setLoad] = useState(false);

  let handleClick = () => {
    setLoad(true)
  }

  if(load){
    return <Front2 />
  }
  else{
    return (
        <div className="main-container">
        <div className="header">     
        <h1>2048-Game🙈</h1>
        
        </div>
        <div className="container">
          <h2>HOW TO PLAY</h2>
          <h4>
            Use your arrow keys to move the tiles.Up arrow will move tils up down
            arrow key to move tiles down left and right arrow keys to move tiles
            down. When two tiles with the same number touch,they will sum up and
            they merge into one!
          </h4>
        </div>
        <button onClick={handleClick}>Play</button>
        </div>
    );
  }
}

export default Front;

import React from 'react';
import Arror from '../assets/img/arows.svg'

function HowToPlayPopup({setPopup,popUp}) {
    return (
        <div className='howtoplay-popup'>
            <h2>HOW TO PLAY:</h2>
            <p>Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!</p>
            <div>
                <img src={Arror} alt=""/>
            </div>
            <div className='close-btn' onClick={()=>{
                localStorage.setItem("popUp", JSON.stringify(true))
                setPopup(!popUp)
            }}>X</div>
        </div>
    );
}

export default HowToPlayPopup;
import React, { useEffect, useState } from 'react';
import BoardView from "../components/Board";
import HowToPlayPopup from "../components/HowToPlayPopup";
import TipsTricks from "./Tips&Tricks";

function GamePage() {
    const [popUpHowTo, setPopUpHowTo] = useState(false)

    const [popUpTipsTricks, setPopUpTipsTricks] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("popUp")) {
            setPopUpHowTo(!JSON.parse(localStorage.getItem("popUp")))
        } else {
            setPopUpHowTo(true)
        }
    }, [])

    return (
        <>
            {!popUpTipsTricks &&
            <>
                <div className="howtoplay-btn" onClick={() => {
                    setPopUpHowTo(!popUpHowTo)
                }}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.232 281.232">
                        <path d="M231.634,79.976v-0.751C231.634,30.181,192.772,0,137.32,0c-31.987,0-57.415,9.018-77.784,22.98
		c-11.841,8.115-12.907,25.906-4.232,37.355l6.326,8.349c8.675,11.444,24.209,12.532,36.784,5.586
		c11.46-6.331,23.083-9.758,34-9.758c18.107,0,28.294,7.919,28.294,20.75v0.375c0,16.225-15.469,39.411-59.231,43.181l-1.507,1.697
		c-0.832,0.936,0.218,13.212,2.339,27.413l1.741,11.58c2.121,14.201,14.065,25.71,26.668,25.71s23.839-5.406,25.08-12.069
		c1.256-6.668,2.268-12.075,2.268-12.075C199.935,160.882,231.634,127.513,231.634,79.976z"/>
                        <path d="M118.42,217.095c-14.359,0-25.993,11.64-25.993,25.999v12.14c0,14.359,11.64,25.999,25.993,25.999
		h22.322c14.359,0,25.999-11.64,25.999-25.999v-12.14c0-14.359-11.645-25.999-25.999-25.999H118.42z"/>
                    </svg>
                    <span className="tooltiptext">HowToPlay</span>
                </div>

                <div className="idea-icon" onClick={() => setPopUpTipsTricks(!popUpTipsTricks)}>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1456661 5 5 8.1456661 5 12 C 5 14.767788 6.6561188 17.102239 9 18.234375 L 9 21 C 9 22.093063 9.9069372 23 11 23 L 13 23 C 14.093063 23 15 22.093063 15 21 L 15 18.234375 C 17.343881 17.102239 19 14.767788 19 12 C 19 8.1456661 15.854334 5 12 5 z M 12 7 C 14.773666 7 17 9.2263339 17 12 C 17 14.184344 15.605334 16.022854 13.666016 16.708984 L 13 16.943359 L 13 21 L 11 21 L 11 16.943359 L 10.333984 16.708984 C 8.3946664 16.022854 7 14.184344 7 12 C 7 9.2263339 9.2263339 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z"/>
                    </svg>
                    <span className="tooltiptext">Tips&Tricks</span>
                </div>
            </>
            }

            <BoardView/>

            {
                popUpTipsTricks &&
            <>
                <TipsTricks popUpTipsTricks={popUpTipsTricks} setPopUpTipsTricks={setPopUpTipsTricks} />
            </>
            }
            {
                popUpHowTo && <>
                    <div className='popup-background'/>
                    <HowToPlayPopup popUp={popUpHowTo} setPopup={setPopUpHowTo}/>
                </>
            }
        </>
    );
}

export default GamePage;
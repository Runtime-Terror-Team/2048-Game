import React from 'react';

function TipsTricks({popUpTipsTricks, setPopUpTipsTricks}) {
    return (
        <>
            <div className='TipsTricks'>
                <div className='TipsTricks-close-btn' onClick={() => {setPopUpTipsTricks(!popUpTipsTricks)
                }}>close</div>
                <h1>2048 Game Tips & Tricks</h1>
                <div className="section section1">
                    <h3>1. Take It Slow</h3>
                    <p>2048 is so easy to play, you might get into the habit of tearing through games without even
                        really
                        paying attention to what you're doing. That's not a good idea. Take your time - there's no
                        penalty
                        for thinking your moves through after all. Also, try to predict where new blocks might come in
                        and
                        how you could deploy them. Something like playing chess.</p>
                </div>
                <div className="section section-2">
                    <h3>2. Work The Corners</h3>
                    <p>In order to win the game you should have a specific strategy. If you do not have one, you will
                        most
                        probaly not reach furthr than 512. So, a good strategy is to always keep your hiest value tile
                        at
                        one of the corners. Just chooose one corner and direct all your tiles there. It is not as easy
                        as it
                        sounds, but you can master it quickly. In order to stop the highest value tile to leave "the
                        king's
                        place", try to pack tiles around it. Preferably, they should be the other biggest tiles. Master
                        this
                        simple strategy and you will soon reach 1024 and even win the 2048 Game!</p>
                </div>
                <div className="section section-3">
                    <h3>3. How to make the highest valued tile in the right bottom corner and not to move it?</h3>
                    <p>
                        Once you have placed your highest tile value is in the right bottom corner, do not move it. To
                        make
                        sure it is not moved, you have to make the last row always filled by pushing the down arrow so
                        that
                        the use of LEFT and Right Arrow would not move the highest valued tile. Basically, this is the
                        most
                        important cheat for 2048 Game - keep the highest tile in the corner and do not move it.
                    </p>
                    <div className='TipsTricks-back-btn' onClick={() => {setPopUpTipsTricks(!popUpTipsTricks)
                    }}>back</div>
                </div>
            </div>
        </>

    );
}

export default TipsTricks;
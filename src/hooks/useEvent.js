import { useEffect } from 'react';

function UseEvent(event, handler, passive = false) {
    useEffect(()=>{
        window.addEventListener(event, handler, passive)
        return function cleanUp(){
            window.removeEventListener(event, handler, passive)
        }
    })
}

export default UseEvent;
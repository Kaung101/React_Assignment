import React, { useState } from "react";
export default function TypeMe(){

    const [isBlur, setIsBlur] = useState(false);
    function handleFocus(){
        setIsBlur(true);
    }

    return (
        <div>
            <input type="text" onBlur={handleFocus} />
            {isBlur && <p style={{color:"red"}}>Please type in here!</p>}
        </div>
    );
}
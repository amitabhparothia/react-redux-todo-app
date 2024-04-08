import React from "react";

export const component1 = (props) => {
    return(
        <>
        <h1>hi</h1>
        <div>
            <input onChange={() => {
                props.additems()
            }} />
        </div>

        <div>
            <button 
            >ADD</button>
        </div>
        
        </>
    )
}
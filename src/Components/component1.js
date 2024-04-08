import React from "react";

export const component1 = (props) => {
    return(
        <>
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
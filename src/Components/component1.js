import React from "react";

export const component1 = (props) => {
    return(
        <>
        <h1>new branch2</h1>
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
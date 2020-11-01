import React from 'react'

export const Toggle = (props) => {
    return (
        <div>
            <h1>Lamp is {props.isDisabled ? "OFF": "ON"}</h1>
            <button onClick={props.onPress}>{
                props.isDisabled ? "Turn on" : "Turn off"
            }</button>
        </div>
    )

}
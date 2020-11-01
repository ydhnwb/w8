import React from 'react'

export const Counter = (props) => {
    return (
        <div>
            <h1>Current counter: {props.counter}</h1>
            <button onClick={props.increment}>Increase</button>
        </div>
    )
}
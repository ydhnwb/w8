import React, { useState } from 'react';
import { Counter } from '../components/Counter';
import { Toggle } from '../components/Toggle';
import ReactEmbedGist from 'react-embed-gist';

export function MainPage (){
    const [toggle, setToggle] = useState(false)
    const [counter, setCounter] = useState(0)
    const persons = [
        {
            name: "Irfan",
            age: 20
        },
        {
            name: "Udhin",
            age: 23
        },
        {
            name: "Ary",
            age: 22
        },
        {
            name: "Krisna",
            age: 26
        },
        {
            name: "Afnur",
            age: 22
        }
    ]

    const onToggleClick = () => setToggle(!toggle)
    const increment = () => setCounter(counter+1)

    return (
        <div>
            <Toggle isDisabled={toggle} onPress={onToggleClick}/>
            <Counter counter={counter} increment={increment} />
            <ul>
                {
                    persons.map((person, i) => <li key={i.toString()}>{person.name}:{person.age}</li>)
                }
            </ul>
            <h1>For other task please go this link below: </h1>
            <a href="https://gist.github.com/ydhnwb/3143d1cf40fce587eb7f385679c0afc3">https://gist.github.com/ydhnwb/3143d1cf40fce587eb7f385679c0afc3</a>
            <ReactEmbedGist gist="ydhnwb/3143d1cf40fce587eb7f385679c0afc3"/>
        </div>

    )
}
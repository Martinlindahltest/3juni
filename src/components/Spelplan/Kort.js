import React from 'react'
import './Kort.css'

export default function Kort(props) {
    if(props.id === 99){
        return (
            <div onClick={() => console.log(props.id)} className="displaynone">
                JSXKORT {props.id}
            </div>
    
        )
    }
    else {
        return(
            <div className="JSXkort">{props.id}</div>
        )
    }

}
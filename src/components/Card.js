import React from "react"
import classes from "./Card.module.css"

function Card(attributes){
    console.log(attributes)
    return (
        <div className={classes.card} style={{backgroundImage: `url(${attributes.background})`}}>
            <h5>{attributes.title}</h5>
            <p>{attributes.info}</p>
        </div>
    )
}

export default Card
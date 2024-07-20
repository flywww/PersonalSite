import React from "react";

export default function ProjectCard(props){
    return(
        <div className="card">
            <img className="card__img" src= {props.imgURL} alt= {props.imgALT} />
            <h3 className="card__title">{props.title}</h3>
            <p className="card__intro">{props.intro}</p>
        </div>
    )
}


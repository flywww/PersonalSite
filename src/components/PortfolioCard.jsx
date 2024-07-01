import React from "react";

export default function PortfolioCard(props){
    return(
        <div className="card">
            <img className="card__img" src= {props.imgURL} alt= {props.imgALT} />
            <h4 className="card__title">{props.title}</h4>
            <small><p className="card__intro">{props.intro}</p></small>
        </div>
    )
}


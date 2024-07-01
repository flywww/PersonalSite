import React from "react";

const timelineData = [{
    companyName: "Twin Beans",
    duration: "2017-2024(7yrs)",
    title: "product manager",
    highlight1: "Build products for medical from scratch.",
    highlight2: "Build and lead a product team",
    highlight3: "highlight3",
    highlight4: "highlight4"
},{
    companyName: "Twin Beans",
    duration: "2017-2024(7yrs)",
    title: "product manager",
    highlight1: "Build products for medical from scratch.",
    highlight2: "Build and lead a product team",
    highlight3: "highlight3",
    highlight4: "highlight4"
},{
    companyName: "Twin Beans",
    duration: "2017-2024(7yrs)",
    title: "product manager",
    highlight1: "Build products for medical from scratch.",
    highlight2: "Build and lead a product team",
    highlight3: "highlight3",
    highlight4: "highlight4"
},{
    companyName: "Twin Beans",
    duration: "2017-2024(7yrs)",
    title: "product manager",
    highlight1: "Build products for medical from scratch.",
    highlight2: "Build and lead a product team",
    highlight3: "highlight3",
    highlight4: "highlight4"
}]

export default function Timeline(props){
    return(
        <section className="timeline">
            {timelineData.map( (e, index) => (
                <div className="timeline__item" key={index}>
                    <div className="timeline__left">
                        <h3 className="timeline__company">{e.companyName}</h3>
                        <small><p className="timeline__duration">{e.duration}</p></small>
                    </div>
                    <div className="timeline__right">
                        <h4 className="timeline__title">{e.title}</h4>
                        <ul className="timeline__highlights">
                            <li>{e.highlight1}</li>
                            <li>{e.highlight2}</li>
                            <li>{e.highlight3}</li>
                            <li>{e.highlight4}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    )   
}


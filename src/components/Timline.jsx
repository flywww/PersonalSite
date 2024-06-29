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
        <div className="timeline">
            <div className="timeline__item">
                <div className="timeline__left">
                    <h3 className="timeline__company">{timelineData[0].companyName}</h3>
                    <small><p className="timeline__duration">{timelineData[0].duration}</p></small>
                </div>
                <div className="timeline__right">
                    <h4 className="timeline__title">{timelineData[0].title}</h4>
                    <ul className="timeline__highlights">
                        <li>{timelineData[0].highlight1}</li>
                        <li>{timelineData[0].highlight2}</li>
                        <li>{timelineData[0].highlight3}</li>
                        <li>{timelineData[0].highlight4}</li>
                    </ul>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__left">
                    <h3 className="timeline__company">{timelineData[1].companyName}</h3>
                    <small><p className="timeline__duration">{timelineData[1].duration}</p></small>
                </div>
                <div className="timeline__right">
                    <h4 className="timeline__title">{timelineData[1].title}</h4>
                    <ul className="timeline__highlights">
                        <li>{timelineData[1].highlight1}</li>
                        <li>{timelineData[1].highlight2}</li>
                        <li>{timelineData[1].highlight3}</li>
                        <li>{timelineData[1].highlight4}</li>
                    </ul>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__left">
                    <h3 className="timeline__company">{timelineData[2].companyName}</h3>
                    <small><p className="timeline__duration">{timelineData[2].duration}</p></small>
                </div>
                <div className="timeline__right">
                    <h4 className="timeline__title">{timelineData[2].title}</h4>
                    <ul className="timeline__highlights">
                        <li>{timelineData[2].highlight1}</li>
                        <li>{timelineData[2].highlight2}</li>
                        <li>{timelineData[2].highlight3}</li>
                        <li>{timelineData[2].highlight4}</li>
                    </ul>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__left">
                    <h3 className="timeline__company">{timelineData[3].companyName}</h3>
                    <small><p className="timeline__duration">{timelineData[3].duration}</p></small>
                </div>
                <div className="timeline__right">
                    <h4 className="timeline__title">{timelineData[3].title}</h4>
                    <ul className="timeline__highlights">
                        <li>{timelineData[3].highlight1}</li>
                        <li>{timelineData[3].highlight2}</li>
                        <li>{timelineData[3].highlight3}</li>
                        <li>{[3].highlight4}</li>
                    </ul>
                </div>
            </div>
        </div>
    )   
}
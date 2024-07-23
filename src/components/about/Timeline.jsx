import {React, memo} from "react";

const timelineData = [
    {
        companyName: "Twin Beans",
        duration: "2017-2024 (7yrs)",
        title: "Product Director",
        highlights: [
            "Recruited and led a 6+ member team.",
            "Formulated strategies, increased project value fivefold.",
            "Products adopted by 80+ operating rooms in Taiwan.",
            "Designed Windows, Web, and Mobile apps, filed two patents."
        ]
    },
    {
        companyName: "ATOM Health",
        duration: "2015-2017 (2yrs)",
        title: "Software Engineer",
        highlights: [
            "Developed JDMCare APP for health metrics in China.",
            "Elevated ECG product safety to medical-grade standards."
        ]
    },
    {
        companyName: "NeeMe Technologies",
        duration: "2014-2015 (2yrs)",
        title: "Founder & Software Engineer",
        highlights: [
            "Built a team, joined AppWorks #9 accelerator.",
            "Developed and launched CaloShop iOS app."
        ]
    },
    {
        companyName: "ARKNAV International",
        duration: "2011-2014 (2.5yrs)",
        title: "Electronics Engineer",
        highlights: [
            "Developed ECG products for hospitals.",
            "Led a product team.",
            "Developed heart rhythm algorithm for MCU chips."
        ]
    }
];

 const Timeline = memo(function Timeline(props){
    return(
        <section className="timeline">
            {timelineData.map( (item, index) => (
                <div className="timeline__item" key={index}>
                    <div className="timeline__left">
                        <h3 className="timeline__company">{item.companyName}</h3>
                        <small><p className="timeline__duration">{item.duration}</p></small>
                    </div>
                    <div className="timeline__right">
                        <h4 className="timeline__title">{item.title}</h4>
                        <ul className="timeline__highlights">
                            {item.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    )   
})

export default Timeline;


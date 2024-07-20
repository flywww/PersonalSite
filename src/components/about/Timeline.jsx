import React from "react";

const timelineData = [
    {
        companyName: "Twin Beans",
        duration: "2017-2024 (7yrs)",
        title: "Product Director",
        highlight1: "Recruited and led a 6+ member team.",
        highlight2: "Formulated strategies, increased project value fivefold.",
        highlight3: "Products adopted by 80+ operating rooms in Taiwan.",
        highlight4: "Designed Windows, Web, and Mobile apps, filed two patents."
      },
      {
        companyName: "ATOM Health",
        duration: "2015-2017 (2yrs)",
        title: "Software Engineer",
        highlight1: "Developed JDMCare APP for health metrics in China.",
        highlight2: "Elevated ECG product safety to medical-grade standards."
      },
      {
        companyName: "NeeMe Technologies",
        duration: "2014-2015 (2yrs)",
        title: "Founder & Software Engineer",
        highlight1: "Built a team, joined AppWorks #9 accelerator.",
        highlight2: "Developed and launched CaloShop iOS app."
      },
      {
        companyName: "ARKNAV International",
        duration: "2011-2014 (2.5yrs)",
        title: "Electronics Engineer",
        highlight1: "Developed ECG products for hospitals.",
        highlight2: "Led a product team.",
        highlight3: "Developed heart rhythm algorithm for MCU chips."
      }
]

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
                            {e.highlight1 && <li>{e.highlight1}</li>}
                            {e.highlight2 && <li>{e.highlight2}</li>}
                            {e.highlight3 && <li>{e.highlight3}</li>}
                            {e.highlight4 && <li>{e.highlight4}</li>}
                            {e.highlight5 && <li>{e.highlight5}</li>}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    )   
}


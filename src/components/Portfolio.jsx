import React from 'react'
import PortfolioCard from './PortfolioCard'

const portfolioData = [{
    imgURL: "../src/assets/portfolio/MEDIRECO.jpg",
    imgALT: "MEDIRECO",
    title: "MEDIRECO",
    intro: "A Blackbox for operating room, record all surgery details."
},{
    imgURL: "../src/assets/portfolio/MEDIRECO.jpg",
    imgALT: "MEDISTATION",
    title: "MEDISTATION",
    intro: "A Blackbox for operating room, record all surgery details."
},{
    imgURL: "../src/assets/portfolio/MEDIRECO.jpg",
    imgALT: "ORDashboard",
    title: "ORDashboard",
    intro: "A Blackbox for operating room, record all surgery details."
}];

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Portfolio</h2>
            <div className="portfolio__carousel">
                <button className='portfolio__button left' aria-label="Scroll left">
                    <img src="../src/assets/portfolio/arrow-left.png" alt="left arrow button" />
                </button>
                <div className='portfolio__list'>
                    {portfolioData.map((portfolio, index) => {
                        return(
                            <PortfolioCard 
                                key={index}
                                imgURL={portfolio.imgURL}
                                imgALT={portfolio.imgALT}
                                title={portfolio.title}
                                intro={portfolio.intro}
                            />
                        )
                    })}
                </div>
                <button className='portfolio__button right' aria-label="Scroll right">
                    <img src="../src/assets/portfolio/arrow-right.png" alt="right arrow button" /> 
                </button>
            </div>
        </section>
    )
}
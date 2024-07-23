import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [{
    imgURL: "../src/assets/project/MEDIRECO.jpg",
    imgALT: "MEDIRECO",
    title: "MEDIRECO",
    intro: "A Blackbox for operating room, record all surgery details."
},{
    imgURL: "../src/assets/project/MEDISTATION.png",
    imgALT: "MEDISTATION",
    title: "MEDISTATION",
    intro: "A Blackbox for operating room, record all surgery details."
},{
    imgURL: "../src/assets/project/mocacare.png",
    imgALT: "ORDashboard",
    title: "ORDashboard",
    intro: "A Blackbox for operating room, record all surgery details."
}];

export default function RecentWork() {
    return (
        <section className='recent-work'>
            <h2 className='recent-work__title'>Recent work</h2>
            <div className="recent-work__carousel">
                <div className='recent-work__list'>
                    {projectData.map((project, index) => {
                        return(
                            <ProjectCard 
                                key={index}
                                imgURL={project.imgURL}
                                imgALT={project.imgALT}
                                title={project.title}
                                intro={project.intro}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
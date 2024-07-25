import React from 'react'
import ProjectCard from './ProjectCard'
import medirecoUrl from "../../assets/project/MEDIRECO_1000x667.webp"
import medistationUrl from '../../assets/project/MEDISTATION_1000x666.webp'
import mocacareUrl from '../../assets/project/MOCACARE_1000x808.webp'

const projectData = [{
    imgURL: medirecoUrl,
    imgALT: "MEDIRECO",
    title: "MEDIRECO",
    intro: "A Blackbox for operating room, record all surgery details."
},{
    imgURL: medistationUrl,
    imgALT: "MEDISTATION",
    title: "MEDISTATION",
    intro: "A surgery case library platform for surgeons to review, learn, and share."
},{
    imgURL: mocacareUrl,
    imgALT: "MOCAheart",
    title: "MOCAheart",
    intro: "A smart heart tracker that measures vital sign with a quick scan of your thumbs."
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
import React from "react";
import ProjectCard from "../about/ProjectCard";
import medirecoUrl from "../../assets/project/MEDIRECO_1000x667.webp"
import medistationUrl from '../../assets/project/MEDISTATION_1000x666.webp'
import medimeetUrl from '../../assets/project/MEDIMEET_1000x563.webp'
import mocacareUrl from '../../assets/project/MOCACARE_1000x808.webp'
import caloshopUrl from '../../assets/project/CaloShop_1000x880.webp'
import ekrdiaUrl from '../../assets/project/eKRDIA_1000x865.webp'

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
    imgURL: medimeetUrl,
    imgALT: "MEDIMEET",
    title: "MEDIMEET",
    intro: "A co-working and communication platform for surgeons."
},{
    imgURL: mocacareUrl,
    imgALT: "MOCAheart",
    title: "MOCAheart",
    intro: "A smart heart tracker that measures vital sign with a quick scan of your thumbs."
},{
    imgURL: caloshopUrl,
    imgALT: "CaloShop",
    title: "CaloShop",
    intro: "An application that integrates health, fitness, and shopping."
},{
    imgURL: ekrdiaUrl,
    imgALT: "eKARDIA ECG monitor",
    title: "eKARDIA ECG monitor",
    intro: "A medical-grade ECG portable device for monitoring by medical staff."
}];

const ProjectsPage = () => {
    return(
        <section className="project">
            <h1 className="project__title">Projects</h1>
            <div className="project__list">
                {
                        projectData.map((project, index) => {
                            return(
                                <ProjectCard 
                                key={index}
                                imgURL={project.imgURL}
                                imgALT={project.imgALT}
                                title={project.title}
                                intro={project.intro}
                            />
                            )
                        }
                    )}
            </div>  
        </section>
    )
}

export default ProjectsPage;
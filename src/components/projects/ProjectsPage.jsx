import React from "react";
import ProjectCard from "../about/ProjectCard";

const projectData = [{
    imgURL: "../src/assets/project/MEDIRECO_1000X667.webp",
    imgALT: "MEDIRECO",
    title: "MEDIRECO",
    intro: "A Blackbox for operating room, record all surgery details."
},{
    imgURL: "../src/assets/project/MEDISTATION_1000x666.webp",
    imgALT: "MEDISTATION",
    title: "MEDISTATION",
    intro: "A surgery case library platform for surgeons to review, learn, and share."
},{
    imgURL: "../src/assets/project/mocacare_1000X808.webp",
    imgALT: "MOCAheart",
    title: "MOCAheart",
    intro: "A smart heart tracker that measures vital sign with a quick scan of your thumbs."
},{
    imgURL: "../src/assets/project/CaloShop_1000X880.webp",
    imgALT: "CaloShop",
    title: "CaloShop",
    intro: "An application that integrates health, fitness, and shopping."
},{
    imgURL: "../src/assets/project/eKRDIA_1000X865.webp",
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
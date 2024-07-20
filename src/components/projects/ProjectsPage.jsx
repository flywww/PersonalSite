import React from "react";
import ProjectCard from "../about/ProjectCard";

const projectData = [{
    imgURL: "../src/assets/project/MEDIRECO.jpg",
    imgALT: "MEDIRECO",
    title: "MEDIRECO",
    intro: "A Blackbox for operating room, record all surgery details."
},{
    imgURL: "../src/assets/project/MEDIRECO.jpg",
    imgALT: "MEDISTATION",
    title: "MEDISTATION",
    intro: "A Blackbox for operating room, record all surgery details."
},{
    imgURL: "../src/assets/project/MEDIRECO.jpg",
    imgALT: "ORDashboard",
    title: "ORDashboard",
    intro: "A Blackbox for operating room, record all surgery details."
},{
    imgURL: "../src/assets/project/MEDIRECO.jpg",
    imgALT: "ORDashboard",
    title: "ORDashboard",
    intro: "A Blackbox for operating room, record all surgery details."
},{
    imgURL: "../src/assets/project/MEDIRECO.jpg",
    imgALT: "ORDashboard",
    title: "ORDashboard",
    intro: "A Blackbox for operating room, record all surgery details."
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
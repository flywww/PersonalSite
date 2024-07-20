import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
    {imgURL: "./src/assets/icon_circle_coding.png", 
        imgALT: "Front-end development", 
        title: "Front-end development", 
        description: "Building front-end by using ReactJS and NextJS."},
    {imgURL: "./src/assets/icon_circle_coding.png", 
        imgALT: "Back-end development", 
        title: "Back-end development", 
        description: "Building back-end by using nodeJS and ExpressJS."},
    {imgURL: "./src/assets/icon_circle_plan.png", 
        imgALT: "Product strategy", 
        title: "Product strategy", 
        description: "Build vision, mission, and roadmap for products."},
    {imgURL: "./src/assets/icon_circle_plan.png", 
        imgALT: "Product planning", 
        title: "Product planning", 
        description: "Planing and managing products from ground up."}
];

function SkillSection(){
    return(
        <section className="skills">
            {skillData.map((skill, index) => {
                return(
                    <SkillItem
                        key={index}
                        imgURL = {skill.imgURL}
                        imgALT = {skill.imgALT}
                        title = {skill.title}
                        description = {skill.description}
                    />
                )
            })}
        </section>
    )
}

export default SkillSection;
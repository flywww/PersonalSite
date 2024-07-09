import React from "react";
import SkillItem from "./Skill";

const skillData = [
    {imgURL: "./src/assets/icon_circle_plan.png", 
        imgALT: "product plan", 
        title: "Product Plan", 
        description: "Planing and managing products from ground up."},
    {imgURL: "./src/assets/icon_circle_plan.png", 
        imgALT: "product plan", 
        title: "Product Plan", 
        description: "Planing and managing products from ground up."},
    {imgURL: "./src/assets/icon_circle_plan.png", 
        imgALT: "product plan", 
        title: "Product Plan", 
        description: "Planing and managing products from ground up."},
    {imgURL: "./src/assets/icon_circle_plan.png", 
        imgALT: "product plan", 
        title: "Product Plan", 
        description: "Planing and managing products from ground up."}
];

function SkillList(){
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

export default SkillList;
import React from "react";
import SkillItem from "./Skill";

function SkillList(){
    return(
        <div className="skills">
            <SkillItem
                imgURL = "./src/assets/icon_circle_plan.png"
                imgALT = ""
                title = "Product Plan"
                description = "Planing and managing products from ground up."
            />
            <SkillItem 
                imgURL = "./src/assets/icon_circle_coding.png"
                imgALT = ""
                title = "Front-End Develop"
                description = "Coding front-end with Tailwind CSS, ReactJS, NextJS / web3 with ether.js and hardhat"
            />
            <SkillItem 
                imgURL = "./src/assets/icon_circle_coding.png"
                imgALT = ""
                title = "Back-End Develop"
                description = "Coding back-end with NodeJS, Express / web3 with solidity"
            />
        </div>
    )
}

export default SkillList;
import React from "react";
import SkillItem from "./Skill";

function SkillList(){
    return(
        <div className="skills">
            <SkillItem
                imgURL = "./src/assets/icon_circle_plan.png"
                imgALT = "product plan"
                title = "Product Plan"
                description = "Planing and managing products from ground up."
            />
            <SkillItem 
                imgURL = "./src/assets/icon_circle_coding.png"
                imgALT = "Front-End Develop"
                title = "Front-End Develop"
                description = "Coding front-end with Tailwind CSS, ReactJS, NextJS / web3 with ether.js and hardhat"
            />
            <SkillItem 
                imgURL = "./src/assets/icon_circle_coding.png"
                imgALT = "Back-End Develop"
                title = "Back-End Develop"
                description = "Coding back-end with NodeJS, Express / web3 with solidity"
            />
            <SkillItem 
                imgURL = "./src/assets/icon_circle_coding.png"
                imgALT = "Back-End Develop"
                title = "Back-End Develop"
                description = "Coding back-end with NodeJS, Express / web3 with solidity"
            />
        </div>
    )
}

export default SkillList;
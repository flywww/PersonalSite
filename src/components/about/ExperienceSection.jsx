import React from "react";
import Timeline from "./Timeline";
import Achievement from "./AchievementSection";

export default function ExperienceSection(){
    return(
        <section className="experiences">
            <h2>Experience</h2>
            <Achievement />
            <Timeline />
        </section>
    )
}
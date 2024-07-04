import React from "react";
import Timeline from "./Timeline";
import Achievement from "./Achievement";

export default function Experience(){
    return(
        <section className="experiences">
            <h2>Experience</h2>
            <Achievement />
            <Timeline />
        </section>
    )
}
import React from "react";
import Timeline from "./Timline";
import Achievement from "./Achievment";

export default function Experience(){
    return(
        <div className="experiences">
            <h2>Experience</h2>
            <Achievement />
            <Timeline />
        </div>
    )
}
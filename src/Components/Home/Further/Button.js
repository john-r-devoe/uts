"use client"

import { useState } from "react";
import Styles from "./button.module.css";

export default function Button({text, link}){
    const [classes, setClasses] = useState(Styles.container);
    return(
        <div className={classes} onClick={() => window.location.href = link} onMouseOver={() => setClasses(classes + " " + Styles.hover)}
            onMouseLeave={() => setClasses(Styles.container)}>
            <p>{text}</p>
        </div>
    );
}
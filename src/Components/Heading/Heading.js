"use client"

import styles from "./heading.module.css"
import WaterSVG from "@/../public/water.svg"
import Image from "next/image";
import Navbar from "./Navbar";

export default function Heading(){
    return(
        <div className={styles.container}>
            <div className={styles.title} onClick={() => window.location.href = "/"}>
                <div style={{width:"2vw", height:"2vw", position:"relative"}}>
                    <Image
                        src={WaterSVG}
                        alt="Water Logo"
                        fill={true}
                    />
                </div>
                <h2 style={{marginTop: "0px", marginBottom: "0px"}}>UTS</h2>
            </div>
            <Navbar />

        </div>
    );
}
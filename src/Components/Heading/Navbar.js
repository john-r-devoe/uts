"use client"

import Link from "next/link"
import Styles from "./navbar.module.css"
import { useState } from "react";

export default function Navbar(){
    const [active, setActive] = useState(setWindow());
    const [hover, setHover] = useState("");
    return(
        <div className={Styles.nav}>
            <ul className = {Styles.nav_ul}>
                <li className={`${Styles.nav_li}${hover == "home" ? " " + Styles.hover: ""}${active == "home" ? " " + Styles.nav_li_active : ""}`}>
                    <Link className={Styles.nav_a} href="/" relative="path" onClick={() => setActive("home")} onMouseOver={() =>setHover("home")} onMouseLeave={() => setHover("")}>Home</Link>
                </li>
                <li className={`${Styles.nav_li}${hover == "contact" ? " " + Styles.hover: ""}${active == "contact" ? " " + Styles.nav_li_active : ""}`}>
                    <Link className={Styles.nav_a} href="/contact" relative="path" onClick={() => setActive("contact")} onMouseOver={() =>setHover("contact")} onMouseLeave={() => setHover("")}>Contact</Link>
                </li>
                <li className={`${Styles.nav_li}${hover == "staff" ? " " + Styles.hover: ""}${active == "staff" ? " " + Styles.nav_li_active : ""}`}>
                    <Link className={Styles.nav_a} href="/staff" relative="path" onClick={() => setActive("staff")} onMouseOver={() =>setHover("staff")} onMouseLeave={() => setHover("")}>Staff</Link>
                </li>
                <li className={`${Styles.nav_li} ${Styles.nav_li_last}${hover == "gallery" ? " " + Styles.hover: ""}${active == "gallery" ? " " + Styles.nav_li_active : ""}`}>
                    <Link className={Styles.nav_a} href="/gallery" relative="path" onClick={() => setActive("gallery")} onMouseOver={() =>setHover("gallery")} onMouseLeave={() => setHover("")}>Gallery</Link>
                </li>
            </ul>
        </div>
    );
}

function setWindow(){
    if(typeof window !== "undefined"){
        let location = window.location.href;
        location = location.substring(location.lastIndexOf("/") + 1);
        return location == "" ? "home" : location;
    }
    else{
        return "home";
    }
}
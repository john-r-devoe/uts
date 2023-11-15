import Styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import Placeholder from "../../../../public/300x300.png";

export default function Pam({title, description}){
    return(
        <div className={Styles.pam_section}>
            <Image src={Placeholder} className={Styles.image_pam} alt="A profile picture of Pam Davidson"></Image>
            <div className={Styles.text_div_pam}>
                <h2 className={Styles.heading}>{title}</h2>
                <p className={Styles.description_right}>{description} <Link href="invalid">Learn More</Link>
                </p>
            </div>
        </div>
    )
}
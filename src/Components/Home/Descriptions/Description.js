import Styles from "./home.module.css"
import Placeholder from "../../../../public/placeholder.png"
import Image from "next/image";
import Link from "next/link";

export default function Description({title, description}){
    return(
        <div className={Styles.description_box}>
            <div className={Styles.text_div}>
                <h2 className={Styles.heading}>{title}</h2>
                <p className={Styles.description_left}>{description} <Link href="invalid">Learn More</Link>
                </p>
            </div>
            <Image src={Placeholder} alt="Alternate Description" className={Styles.image_top}></Image>
        </div>
    );
}
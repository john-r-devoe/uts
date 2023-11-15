import Styles from "./further.module.css";
import Button from "./Button";
import Placeholder from "../../../../public/420x420.png";
import Image from "next/image";

export default function Further({text1, text2, button1, button2}){
    return(
        <div className={Styles.block}>
            <div className={Styles.headings}>
                <h2>{text1}</h2>
                <h2>{text2}</h2>
            </div>
            <div className={Styles.buttons}>
                <Button text={button1[0]} link={button1[1]}/>
                <Button text={button2[0]} link={button1[1]}/>
            </div>
            <Image src={Placeholder} className={Styles.image} alt="An image of blah blah blah"/>
        </div>
    );
}
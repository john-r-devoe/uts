import Styles from "./blocks.module.css";

export default function DBlock({title, description}){
    return(
        <div className={Styles.container}>
            <div className={Styles.block}>
                <h3 className={Styles.heading}>{title[0]}</h3>
                <p className={Styles.text}>{description[0]}</p>
            </div>
            <div className={Styles.block}>
                <h3 className={Styles.heading}>{title[1]}</h3>
                <p className={Styles.text}>{description[1]}</p>
            </div>
            <div className={Styles.block}>
                <h3 className={Styles.heading}>{title[2]}</h3>
                <p className={Styles.text}>{description[2]}</p>
            </div>
        </div>
    );
}
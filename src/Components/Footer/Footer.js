import Image from "next/image";
import LocationIcon from "../../../public/location.svg";
import PhoneIcon from "../../../public/phone.svg";
import Styles from "./footer.module.css";

export default function Footer({address, copyright, phoneNumber}){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <div className={Styles.icon_box}>
                    <div style={{width:"1.8vw", height:"1.8vw", position:"relative"}}><Image fill={true} src={LocationIcon} alt="A map pinpoint icon"/></div>
                    <p>{address}</p>
                </div>
            </div>
            <div className={Styles.child}>
                <p>{copyright} {getYear()}</p>
            </div>
            <div className={Styles.child}>
                <div className={Styles.icon_box}>
                    <div style={{width:"1.8vw", height:"1.8vw", position:"relative"}}><Image fill={true} src={PhoneIcon} alt="A phone icon"/></div>
                    <p>{phoneNumber}</p>
                </div>
            </div>
        </div>
    );
}

function getYear(){
    let currentTime = new Date();
    return currentTime.getFullYear().toString();
}
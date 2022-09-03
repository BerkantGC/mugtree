import { useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";

import {BsDiscord, BsMailbox, BsWhatsapp} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import '../Styles/Communicate.scss';
import { useState } from "react";
import SlideMenu from "../Components/SlideMenu";

const Communicate = () => {
    const navigate = useNavigate();
    const [isMenuShown, setMenuShown] = useState(false);
    
    return(
        <div className="comm-container">
            <SlideMenu isMenuShown={isMenuShown} setMenuShown={setMenuShown} navigate={navigate}/>
            <div className={`${"comm-main-container"} ${(isMenuShown) && "active"}`}>
            <div style={{display: 'flex', justifyContent: "center"}}>
                    <BackButton navigate={navigate}/>
            </div>
                <h1 style={{fontSize: 35, fontWeight: 'bold'}}>BİZİMLE İLETİŞİME GEÇ</h1>
                <div className="each-comm">
                    <p>DISCORD</p>
                    <BsDiscord size={30}/>
                </div>
                <div className="each-comm">
                    <p>WHATSAPP</p>
                    <BsWhatsapp size={30}/>
                </div>
                <div className="each-comm">
                    <p>MAIL</p>
                    <FiMail size={30}/>
                </div>
            </div>
        </div>
    )
}

export default Communicate;
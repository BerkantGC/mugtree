import { useNavigate } from "react-router-dom";

import "../Styles/SlideMenu.scss";
import {FiMenu} from "react-icons/fi"

const EachNavigation = (props) => {
    return(
        <div onClick={()=> props.navigate(props.target)} className="each-navigation-container">
            {props.name}
        </div>
    )
}
export default function(props){
    const navigate = useNavigate();

    return(
        <div className={`${"slide-menu-container"} ${props.isMenuShown && "active"}`} >
        <FiMenu size={40} className="slide-menu-btn" onClick={()=>props.setMenuShown(!props.isMenuShown)}/>
            <div style={{marginBottom: 70}}></div>
            <div className="navigations">
                <EachNavigation target="/" navigate={navigate} name="Ana Sayfa" />
                <EachNavigation target="/hakkimizda" navigate={navigate} name="Hakkımızda"/>
                <EachNavigation target="/iletisim" navigate={navigate} name="İletişim" />
            </div>
        </div>
    )
}
import "../Styles/BackButton.scss";
import {HiHome} from "react-icons/hi"

export default function({navigate}){
    return(
        <HiHome size={30} color="#291b53" className="back-btn-container" onClick={()=>navigate("/")}/>
    )
}
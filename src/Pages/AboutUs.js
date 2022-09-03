import { useNavigate } from "react-router-dom"
import BackButton from "../Components/BackButton"
import { HiBackspace } from "react-icons/hi";
import SlideMenu from "../Components/SlideMenu";
import { useState } from "react";

import "../Styles/AboutUs.scss";

export default function(){
    const navigate = useNavigate();
    const [isMenuShown, setMenuShown] = useState(false);

    return(
        <div className="about-us-container">
            <SlideMenu isMenuShown={isMenuShown} setMenuShown={setMenuShown} navigate={navigate}/>
            <div className={`${"about-us-main-container"} ${(isMenuShown) && "active"}`}>
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <BackButton navigate={navigate}/>
                </div>
                <h1 style={{fontSize: 30}}>2022-2023 <br></br>Yılında Kurulan Yaşar Üniversitesi Öğrenci Topluluğu</h1>
                <h3>Amacımız</h3>
                <p>
                    Hayal ve fikirlerimizi yansıtan mobil uygulama ve oyunlar yapmak, sektörden
                    insanlarla tanışmak, eğitimler almak, takım halinde çalışmak, iş hayatına hazırlanmak ve kendimizi 
                    geliştirmek.
                </p>
                <h3>Yazılım Ekibi</h3>
                <p>
                    Fikirlerimizi ve planlarımızı kod satırlarına dönüştüren ekiptir.
                </p>
                <h3>Oyun Ekibi</h3>
                <p>
                    Oyun yapımında görev alan ve aynı zamanda Game Jamlere katılarak takım çalışmasında zirveye çıkan ekiptir.
                </p>
                <h3>Tasarım Ekibi</h3>
                <p>
                    Fikirlerimizi ve planlarımıza kendi yorumunu ve sanatını katarak projenin görünüşünü belirleyen ekiptir.
                </p>
                <h3>Organizasyon Ekibi</h3>
                <p>
                    Topluluğumuzun etkinliklerini organize eden ve ayarlayan ekiptir.
                </p>
                
            </div>
        </div>
    )
}
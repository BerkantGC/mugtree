import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SlideMenu from "../Components/SlideMenu";

import '../Styles/Activities.scss';
import reactNativeCourseImage from '../Images/coursern101.jpg'
import firstActivity from '../Images/firstActivity.jpg';
import movieActivity from '../Images/socialnetworkmoviewithfyve.jpg';
import paintballMUG from '../Images/paintballMUG.jpeg';
import unityCourse from '../Images/courseunity101.png';
import interviewCeng from '../Images/interviewceng.png';

import BackButton from "../Components/BackButton";

import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
      url: reactNativeCourseImage,
      headerText: 'React Native 101',
      date: "28.11.2022",
      caption: 'Etkinlik 1'
    },
    {
        url: movieActivity,
        headerText: 'FYVE Topluluğu ile Film Etkinliği',
        date: '30.11.2022',
        caption : 'Etkinlik 3'
    },
    {
      url: firstActivity,
      headerText: 'Tanışma Toplantısı',
      date: '07.10.2022',
      caption: 'Etkinlik 2'
    },
    {
      url: paintballMUG,
      headerText: 'Paintball',
      date: '03.12.2022',
      caption: 'Etkinlik 4'
    },
    {
      url: unityCourse,
      headerText: 'Unity 101',
      date: '16.12.2022',
      caption: 'Etkinlik 5'
    },
    {
      url: interviewCeng,
      headerText: "İzmir'de Bilgisayar Mühendisliği Okumak",
      date: '17.12.2022',
      caption: 'Etkinlik 6'
    },
    
];
//backgroundImage: `url(${props.image})`
const ActivitiesCard = (props) => {
    console.log(props.image)
    return(
            <div style={{backgroundImage: `url(${props.image})`, height: window.innerHeight/1.5,
             justifyContent: 'center', alignContent: 'center', backgroundSize: 'contain', backgroundPosition : 'center' }} 
            className='activ_activities_card'>
                <div className="activ_activities_card_infos">
                    <h3>{props.headerText}</h3>
                    <p>Tarih: {props.date}</p>
                </div>
            </div>
    )
}
export default function()
{
    const navigate = useNavigate();
    const [isMenuShown, setMenuShown] = useState(false);

    return(
        <div className="activ_container">
            <SlideMenu isMenuShown={isMenuShown} setMenuShown={setMenuShown} navigate={navigate}/>
            <div style={{display: 'flex', justifyContent: "center"}}>
                    <BackButton navigate={navigate}/>
            </div>
            <div className="activ_main_container">
                <div className="activ_main_keeper">
                    <div className="activ_header">
                        <h1>ETKİNLİKLERİMİZ</h1>
                    </div>
                    <div className={`${window.innerWidth > 600 ? "activ_activities_container_browser" : 'activ_activities_container_mobile'}`}>
                        <Slide transitionDuration={500} >
                            {slideImages.map((slideImage, index) => 
                            (
                                    <ActivitiesCard headerText={slideImage.headerText} image={slideImage.url} date={slideImage.date} />
                            )
                            )}     
                        </Slide>
                    </div>

                </div>
            </div>
        </div>
    )
}
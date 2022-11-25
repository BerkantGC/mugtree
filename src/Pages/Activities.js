import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SlideMenu from "../Components/SlideMenu";

import '../Styles/Activities.scss';
import reactNativeCourseImage from '../Images/coursern101.jpg'
import firstActivity from '../Images/firstActivity.jpg';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
      url: reactNativeCourseImage,
      caption: 'Slide 1'
    },
    {
      url: firstActivity,
      caption: 'Slide 2'
    },
];

const ActivitiesCard = (props) => {
    console.log(props.image)
    return(
            <div style={{backgroundImage: `url(${props.image})`, marginLeft: window.innerWidth/15, marginRight: window.innerWidth/15,
             height: '30rem', justifyContent: 'center', alignContent: 'center', backgroundSize: 'contain',backgroundPosition : 'center' }} 
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
            <div className="activ_main_container">
                <div className="activ_main_keeper">
                    <div className="activ_header">
                        <h1>ETKİNLİKLERİMİZ</h1>
                    </div>
                    <div className="activ_activities_container">
                    <Slide transitionDuration={500} >
                        {slideImages.map((slideImage, index) => 
                        (
                                <ActivitiesCard headerText="React Native 101" image={slideImage.url} date="28.11.2022" />
                        )
                        )}     
                    </Slide>
                    </div>

                </div>
            </div>
        </div>
    )
}
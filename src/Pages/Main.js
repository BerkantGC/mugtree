import logo from '../logo.png';
import '../Styles/Main.scss';

import {FiCopy} from "react-icons/fi";

import {BsLinkedin, BsTwitter, BsWhatsapp} from "react-icons/bs";
import {MdClose} from "react-icons/md"
import { useState, useRef, useEffect } from 'react';
import SlideMenu from '../Components/SlideMenu';

const LinkToNavigate = (props) => {
  return(
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      <div>
      {props.title}
      </div>
    </a>
  )
}
function Route(){
    //console.log('current URL 👉️', window.location.href);
  const searchRef = useRef();

  const [isCopied, setIsCopied] = useState(false);
  const [isMenuShown, setMenuShown] = useState(false);

  const copyToClickboard = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setIsCopied(!isCopied)
  }

  useEffect(() => {
    const closeAlert = (event) => {
      if(searchRef.current && !searchRef.current.contains(event.target))
      {
        setIsCopied(false);
      }
    };
    document.body.addEventListener("click", closeAlert);

    return()=> document.body.removeEventListener('click', closeAlert);
  }, []);

  const CopiedAlert = () => {
    return(
      <div ref={searchRef}  className={`${"modal"} ${isCopied && "active"}`}>
        <div style={{width: 300, height: '100%', textAlign: 'center', alignItems: 'center', color: 'black'}}>
          <MdClose className='close-btn' onClick={()=>setIsCopied(false)} size={20}/>
          <div>Panoya Kopyalandı</div>
        </div>
      </div>
    )
  }

  const wpLink = "whatsapp://send?text=" + window.location.href;
  const instaLink = "https://twitter.com/intent/tweet?text=Check%20out%20this%20Linktree!%20-%20" + window.location.href;
  const linkedinLink = "https://www.linkedin.com/sharing/share-offsite/?url=" + window.location.href;

  return (
    <div className="App">
      <CopiedAlert isCopied={isCopied} setIsCopied={setIsCopied}/>

      <SlideMenu isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      
      <div className={`${"main-container"} ${(isCopied || isMenuShown) && "active"}`}>

        <div className='header-title'>
          <div style={{marginTop: 10}}>
            <img alt='logo' className='logo' src={logo} style={{height: window.innerHeight/3, objectFit: 'cover'}} />
          </div>
          <h1 className='title'>YAŞAR ÜNİVERSİTESİ MOBİL UYGULAMA GELİŞTİRME TOPLULUĞU</h1>
        </div>

        <div className='all-links'>
          <LinkToNavigate title='Kayıt Formu' link='https://docs.google.com/forms/d/e/1FAIpQLSeyAfk6DE91Jce7G0C1llMBkc-rXjCbumVjOxH84Wy1vCLlFQ/viewform'/>

          <LinkToNavigate title='Instagram' link='https://www.instagram.com/mug.yasar/'/>

          <LinkToNavigate title='Linkedin' link='https://www.linkedin.com/company/ya%C5%9Far-%C3%BCniversitesi-mobil-uygulama-geli%C5%9Ftirme-toplulu%C4%9Fu/'/>

          <LinkToNavigate title='Discord' link='https://discord.gg/yErKryTjb6'/>
          
          <LinkToNavigate title='Youtube' link='https://www.youtube.com/channel/UCgj31r8y7gOfyDh0mGJKQqQ'/>

        </div>

        <div className='share-us-title'>
          <p>Bizi paylaş!</p>
        </div>

        <div className='share-btn'>
          <a href={instaLink}>
            <BsTwitter size="30" color='white'></BsTwitter>
          </a>
          <a href={wpLink} data-action="share/whatsapp/share">
            <BsWhatsapp size="30" color='white'></BsWhatsapp>
          </a>
          <a href={linkedinLink}>
            <BsLinkedin size="30" color='white'></BsLinkedin>
          </a>

          <FiCopy onClick={copyToClickboard} style={{cursor: 'pointer'}} size="30" color='white'></FiCopy>
          
        </div>
      </div>
    </div>
  );
}

export default Route;
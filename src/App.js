import logo from './logo.png';
import './Styles/Main.scss';
import {FiCopy} from "react-icons/fi";
import {BsLinkedin, BsTwitter, BsWhatsapp} from "react-icons/bs";

function App() {
  //console.log('current URL 👉️', window.location.href);

  const copyToClickboard = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert('Text copied');
  }

  const wpLink = "whatsapp://send?text=" + window.location.href;
  const instaLink = "https://twitter.com/intent/tweet?text=Check%20out%20this%20Linktree!%20-%20" + window.location.href;
  const linkedinLink = "https://www.linkedin.com/sharing/share-offsite/?url=" + window.location.href;
  return (
    <div className="App">
      <div className='main-container'>
        <div className='header-title'>
          <img alt='logo' src={logo} width={200} height={200}></img>
          <h1 className='title'>YAŞAR ÜNİVERSİTESİ MOBİL UYGULAMA GELİŞTİRME TOPLULUĞU</h1>
        </div>
        <div className='all-links'>
          <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSeyAfk6DE91Jce7G0C1llMBkc-rXjCbumVjOxH84Wy1vCLlFQ/viewform'>
            <div>
            Kayıt Formu
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/mug.yasar/'>
            <div>
            Instagram
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/ya%C5%9Far-%C3%BCniversitesi-mobil-uygulama-geli%C5%9Ftirme-toplulu%C4%9Fu/'>
            <div>
            Linkedin
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/channel/UCgj31r8y7gOfyDh0mGJKQqQ'>
            <div>
            Youtube
            </div>
          </a>
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
            <FiCopy onClick={copyToClickboard} size="30" color='white'></FiCopy>
      </div>
      </div>
    </div>
  );
}

export default App;

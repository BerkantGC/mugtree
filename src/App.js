import logo from './logo.png';
import './Styles/Main.scss';
import {FiShare} from "react-icons/fi";

function App() {
  //console.log('current URL 👉️', window.location.href);

  return (
    <div className="App">
      <div className='main-container'>
        <div className='header-title'>
          
          <img alt='logo' src={logo} width={200} height={200}></img>
          <h1 className='title'>YAŞAR ÜNİVERSİTESİ MOBIL UYGULAMA GELİŞTİRME TOPLULUĞU</h1>
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
      </div>
    </div>
  );
}

export default App;

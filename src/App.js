import Main from "./Pages/Main";
import AboutUs from "./Pages/AboutUs";
import Communicate from "./Pages/Communicate";

import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom"
import Activities from "./Pages/Activities";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/hakkimizda" element={<AboutUs/>}/>
        <Route path="/iletisim" element={<Communicate/>}/>
        <Route path="/etkinlikler" element={<Activities/>} />
      </Routes>
    </Router>
  )
}

export default App;

import Main from "./Pages/Main";
import AboutUs from "./Pages/AboutUs";
import Communicate from "./Pages/Communicate";

import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/hakkimizda" element={<AboutUs/>}/>
        <Route path="/iletisim" element={<Communicate/>}/>
      </Routes>
    </Router>
  )
}

export default App;

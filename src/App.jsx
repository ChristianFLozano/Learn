import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Galery from "./Pages/Galery";
function App() {
  

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/galery" element={<Galery/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App

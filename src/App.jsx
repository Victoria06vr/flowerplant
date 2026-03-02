import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './views/Home'
import MyPlants from './views/MyPlants'
import About from './views/About'
import Layout from './Layout'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/flowerplant">
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myplants" element={<MyPlants />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './views/Home'
import MyPlants from './views/MyPlants'
import About from './views/About'
import Layout from './Layout'

function App() {
  return (
    <BrowserRouter basename="/flowerplant">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="myplants" element={<MyPlants />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from './views/Home'
import MyPlants from './views/MyPlants'
import About from './views/About'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "myplants",
        element: <MyPlants />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App

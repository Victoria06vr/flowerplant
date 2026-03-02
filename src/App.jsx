import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from './views/Home'
import MyPlants from './views/MyPlants'
import About from './views/About'
import Layout from './Layout'

// GitHub Pages deploy requires a basename matching the repo name
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
],
{
  basename: "/flowerplant"
}
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App

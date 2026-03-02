import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <nav className="headerNav">
                <Link to="/"><h1>FlowerPlant</h1></Link>
                <div className="navLinks">
                  <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/myplants">MyPlants</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/about">About</Link>
                </div>
            </nav>
        </header>
    
    )
}
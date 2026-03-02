import planttwo from "../assets/planttwo.jpg"
import plantfour from "../assets/plantfour.jpg"
import plantfive from "../assets/plantfive.jpg"
export default function About(){
    return(
        <main>
            <div className="introduction">
            <h1>About us</h1>
            </div>
        <section className="section">
                <div className="text">
                <h2>Our Vision</h2>
                <p>
                At FlowerPlant, our vision is to inspire a world where everyone feels confident and connected to nature through plant care. 
                We aim to make plant ownership simple, enjoyable, and accessible to people of all experience levels.
                </p>
                </div>
                <div className="image">
                <img src={planttwo} alt="Plant two" />
                </div>
        </section>
        <section className="section">
                <div className="image">
                <img src={plantfour} alt="Plant four" />
                </div>
                <div className="textMission">
                <h2>Our Mission</h2>
                <p>
                Our mission is to provide clear, practical, and reliable plant care guidance while allowing users to create and manage their own personalized plant collections. 
                FlowerPlant is designed to help users understand their plants’ needs and build healthy, thriving indoor and outdoor spaces.
                </p>
                </div>
        </section>
        <section className="section">
                <div className="text">
                <h2>Our Purpose</h2>
                <p>
                The purpose of FlowerPlant is to bridge the gap between beginners and expert plant enthusiasts by offering structured care guides, helpful resources, and a simple way to track personal plants.
                We want to encourage sustainable living, mindfulness, and a deeper appreciation for greenery in everyday life.
                </p>
                </div>
                <div className="image">
                <img src={plantfive} alt="Plant five" />
                </div>
        </section>
    </main>
    )
}
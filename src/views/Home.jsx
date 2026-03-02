import plantone from "../assets/plantone.jpg"
import { Link } from "react-router-dom";

export default function Home(){
    return(
      <>
            <div className="introduction">
            <h1>Welcome to FlowerPlant</h1>
            <p>Find more about taking care of your plants and organise your plant guide</p>
            </div>
            <section className="section">
                <div className="text">
                <h2>About us</h2>
                <p>
                <b>FlowerPlant </b>is a growing community created for plant lovers of all levels — 
                from curious beginners to experienced gardeners. Whether you’re caring for your 
                very first houseplant or managing a thriving indoor jungle,
                FlowerPlant is here to support your journey.
                </p>
                <p>
                Our platform makes plant care simple and enjoyable. Explore our collection of 
                easy-to-follow plant care guides, learn the basics of watering, lighting, and soil selection, 
                and discover helpful tips to keep your plants healthy and happy.
                </p>
                 <Link to="/about" className="btn">Read more</Link>
                </div>
                <div className="image">
                    <img src={plantone} alt="Plant one" />
                </div>
                </section>
                <section className="sectionTwo">
                <h2 className="guideTitle">Plant care guide</h2>
                    <table className="plantTable">
                        <thead>
                            <tr>
                                <th>Common Name</th>
                                <th>Scientific Name</th>
                                <th>Light</th>
                                <th>Watering</th>
                                <th>Soil</th>
                                <th>Level</th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr>
                                <td>Snake Plant</td>
                                <td>Sansevieria trifasciata</td>
                                <td>Low to bright indirect light</td>
                                <td>Every 2-3 weeks</td>
                                <td>Well-draining cactus or succulent mix</td>
                                <td>Beginner</td>
                            </tr>
                            <tr>
                                <td>Spider Plant</td>
                                <td>Chlorophytum comosum</td>
                                <td>Bright, indirect sunlight</td>
                                <td>Every 1-2 weeks</td>
                                <td>Well-draining potting mix</td>
                                <td>Intermediate</td>
                            </tr>
                            <tr>
                                <td>Fiddle-Leaf Fig</td>
                                <td>Ficus lyrata</td>
                                <td>Bright, indirect light (6+ hrs)</td>
                                <td>When top 2-3 inches of soil are dry</td>
                                <td>Well-draining, peat-based mix with perlite</td>
                                <td>Expert</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="createPart">
                        <h2>Want to create your own guide?</h2>
                        <Link to="/myplants" className="btn">Create a guide</Link>
                    </div>
                </section>
        </>
    )
}
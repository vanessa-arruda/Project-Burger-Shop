import Founder from "../home/Founder";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Menu from "../home/Menu";

const About = () => {
  return (
    <div className="about">
        <main>
            <h1>About us</h1>
            <article>
                <h4>BURGER SHOP</h4>
                <p>This is Burger Shop. The place for most tasty burgers on the entire earth.</p>
                <p>Explore the various type of food and burgers. Click below to see menu</p>
                <Link to="/">
                  <HiMagnifyingGlassCircle />
                </Link>
            </article>
            <div>
            <Founder/>
            </div>
        </main>  
    </div>    
  )
}

export default About;

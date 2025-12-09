
import { useNavigate } from "react-router-dom";
import HeroImage from '../Images/HeroSection.jpg';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="heroSectionContainer">
      <img src= {HeroImage} alt="HeroSectionImage" className="heroSectionImage"></img>

      <div className="heroContent">
       <h1>Discover the Latest Tech Gadgets</h1>
       <p>Explore a curated collection of modern devices—smartphones, speakers, wearables, laptops, and more.</p>

       <button onClick={() => navigate("/gadgets")}>Start Browsing</button>
      </div>
    </div>
  );
}

export default HeroSection;

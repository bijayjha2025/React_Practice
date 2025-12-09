
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="heroSectionContainer">
      <h1>Discover the Latest Tech Gadgets</h1>
      <p>Explore a curated collection of modern devices—smartphones, speakers, wearables, laptops, and more.</p>

      <button onClick={() => navigate("/gadgets")}>
        Start Browsing
      </button>
    </div>
  );
}

export default HeroSection;

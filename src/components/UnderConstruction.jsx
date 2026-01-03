import Logo from "../assets/images/llama.svg";
import "../styles/underConstruction.css";

const UnderConstruction = () => {
  return (
    <div className="uc-container">
      <div className="uc-card">
        <img src={Logo} alt="Red Llama Peruvian Food" className="uc-logo" />

        <h1 className="uc-title">
          We’re cooking something amazing 🇵🇪
        </h1>

        <p className="uc-text">
          Our Peruvian food website is currently under construction.
          <br />
          Very soon you’ll enjoy an experience full of flavor,
          tradition, and great taste.
        </p>

        <button className="uc-button">Coming Soon</button>
      </div>
    </div>
  );
};

export default UnderConstruction;

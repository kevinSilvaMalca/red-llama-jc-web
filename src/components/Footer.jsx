import '../styles/Footer.css';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import Subscription from './Subscription';

const Footer = () => {
  // const location = useLocation();
  // if (location.pathname === '/card-menu') return null;
  return (
    <>
      <div className="footer-subscription">
        <Subscription></Subscription>
      </div>
      <footer className="footer-content">
        <div className="footer-social social">
          <a
            href="https://www.facebook.com/profile.php?id=61565298384026&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-img facebook image-with-glow image-with-bg"
              src={facebook}
              alt="facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/thetriplethree333/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-img instragram image-with-glow image-with-bg"
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

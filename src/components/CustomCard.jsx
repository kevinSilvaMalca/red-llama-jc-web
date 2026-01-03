import { Link, useLocation } from 'react-router-dom';
import '../styles/CustomCard.css';
import PropTypes from 'prop-types';

const CustomCard = ({ pathImage, children }) => {
  const location = useLocation();
  if (location.pathname === '/card-menu') return null;
  return (
    <>
      <div className="custom-container">
        <figure className="custom-figure">
          <img className="custom-img" src={pathImage} alt="" />
        </figure>
        <div className="custom-content">
          {/* <div className="custom-description__main"></div>
          <div className="custom-description__secondary"></div> */}
          {children}
        </div>
      </div>
    </>
  );
};

CustomCard.propTypes = {
  pathImage: PropTypes.node,
  children: PropTypes.node.isRequired,
};

export default CustomCard;

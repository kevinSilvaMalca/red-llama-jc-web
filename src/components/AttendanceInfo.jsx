import '../styles/AttendanceInfo.css';
import PropTypes from 'prop-types';

const AttendanceInfo = ({ showLocation = true }) => {
  return (
    <>
      <div className="attendance-container flex gap-x-16">
        <div className="attendance-hours-container">
          <h2 className="font-cursive text-secondary text-5xl/[40px] md:text-6xl/[50px] lg:text-7xl/[60px] mb-6">
            Opening Hours
          </h2>
          <ul className="attendance-hours">
            <li className="attendance-hours__item text-base md:text-lg lg:text-xl pl-0 py-3">
              Monday: <strong>Closed</strong>
            </li>
            <li className="attendance-hours__item text-base md:text-lg lg:text-xl pl-0 py-3">
              Tuesday: <strong>Closed</strong>
            </li>
            <li className="attendance-hours__item text-base md:text-lg lg:text-xl pl-0 py-3">
              Wednesday: <strong>11 PM - 10 PM</strong>
            </li>
            <li className="attendance-hours__item text-base md:text-lg lg:text-xl pl-0 py-3">
              Thursday: <strong>11 AM - 10 PM</strong>
            </li>
            <li className="attendance-hours__item text-base md:text-lg lg:text-xl pl-0 py-3">
              Friday: <strong>11 AM - 12 PM</strong>
            </li>
            <li className="attendance-hours__item text-base md:text-lg lg:text-xl pl-0 py-3">
              Saturday: <strong>11 AM - 2 AM</strong>
            </li>
            <li className="attendance-hours__item text-base md:text-lg lg:text-xl pl-0 py-3">
              Sunday: <strong>11 AM - 9 PM</strong>
            </li>
          </ul>
        </div>
        {showLocation && (
          <div className="attendance-location-container">
            <h2 className="font-cursive text-secondary text-7xl/[60px] mb-6">
              Location
            </h2>
            <ul className="attendance-location">
              <li className="attendance-location__item text-2xl pl-0 py-3">
                Address : 89 Arch St, Hartford CT 06103
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

AttendanceInfo.propTypes = {
  showLocation: PropTypes.node,
};

export default AttendanceInfo;

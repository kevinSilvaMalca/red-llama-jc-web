import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/ContactForm.css';
import ContactService from '../services/contact.service';
import SplashScreen from './SplashScreen';

const ContactForm = () => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeSplash = () => {
    setShowSplash(false);
    setIsModalOpen(true);
  };

  const clearData = () => {
    setDate(new Date());
    setName('');
    setEmail('');
    setPhone('');
    setNumberOfPeople('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = {
      name,
      email,
      phone,
      date: date.toISOString(),
      numberOfPeople,
    };
    const areFieldsValid = Object.entries(request).every(([key, value]) => {
      if (key === 'numberOfPeople') {
        const numberValue = Number(value);
        return !isNaN(numberValue) && numberValue > 0;
      } else {
        return typeof value === 'string' && value.trim() !== '';
      }
    });
    setShowErrors(!areFieldsValid);
    try {
      if (areFieldsValid) {
        const data = await ContactService.sendContact(request);
        if (data) {
          setShowSplash(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          document.getElementById('formContact').reset();
          clearData();
        }
      }
    } catch (error) {
      console.error('Error al enviar los datos de contacto:', error);
    }
  };

  return (
    <>
      <div className="contact-container flex flex-col md:flex-row gap-y-20 md:gap-x-6 md:gap-x-12 lg:gap-x-24">
        <div className="contact-image"></div>
        <div className="contact-data">
          <h3 className="contact-title font-cursive text-center md:text-left text-primary text-[48px]/[60px] md:text-[60px]/[72px] lg:text-[72px]/[80px] mb-4">
            Bookings & Contact
          </h3>
          <div className="contact-form text-left mb-7">
            <form onSubmit={handleSubmit} id="formContact">
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="">
                  Name
                </label>
                <input
                  className="contact-form-input"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="">
                  Email
                </label>
                <input
                  className="contact-form-input"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="">
                  Phone
                </label>
                <input
                  className="contact-form-input"
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="">
                  Number of people
                </label>
                <input
                  className="contact-form-input"
                  type="text"
                  placeholder="Number of people."
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                />
              </div>
              <Calendar
                onChange={setDate}
                value={date}
                className="custom-calendar"
              />
              <div className="text-center md:text-left">
                <button
                  className="contact-submit home-button mt-4"
                  type="submit"
                >
                  SUBMIT
                </button>
              </div>
            </form>
            {showErrors && (
              <span className="text-error">Debe llenar todos los campos</span>
            )}
          </div>
          {showSplash && (
            <SplashScreen onComplete={closeSplash} servicesLoaded={true} />
          )}
          {isModalOpen && (
            <div className="modal-overlay" onClick={toggleModal}>
              <div
                className="modal-content contact"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={toggleModal}>
                  &times;
                </button>
                <div>
                  <p className="text-center">
                    Your data has been successfully{' '}
                    <br className="min-[450px]:hidden" /> submitted!
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="contact-info">
            <h3 className="contact-info-head font-cursive text-primary-light text-left text-[52px]/[60px] sm:text-[64px]/[72px]  mb-4">
              Contact info
            </h3>
            <div className="contact-info-item text-left mb-3">
              <p className="contact-info-title mb-1">Phone</p>
              <p className="contact-info-value text-lg md:text-xl">
                (959) 256-5848
              </p>
            </div>
            <div className="contact-info-item text-left">
              <p className="contact-info-title mb-1">Email</p>
              <p className="contact-info-value text-lg md:text-xl">
                admin@thetriplethree333.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

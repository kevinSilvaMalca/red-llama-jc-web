import { useState } from 'react';
import SubscriptionService from '../services/subscription.service';
import '../styles/Subscription.css';
import SplashScreen from './SplashScreen';

const Subscription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeSplash = () => {
    setShowSplash(false);
    setIsModalOpen(true);
  };

  const handleSubscribe = async (event) => {
    event.preventDefault();
    try {
      if (email) {
        const data = await SubscriptionService.sendSubscription({ email });
        if (data) {
          setShowSplash(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          document.getElementById('formSubscribe').reset();
          setEmail('');
        }
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error('Error al realizar la subscripción: ', error);
    }
  };
  return (
    <div id="subscription" className="subscribe mb-33 md:mb-38">
      <h3 className="font-cursive text-6xl text-center text-primary-light mb-9">
        Subscription
      </h3>
      <p className="text-center text-lg md:text-xl lg:text-3xl mb-10 md:mb-12 ">
        "Want to have a perfect evening? Reserve your table now!"
      </p>
      <form
        onSubmit={handleSubscribe}
        className="form-subscribe"
        id="formSubscribe"
      >
        <div className="mb-9">
          <input
            className="subscribe-input"
            placeholder="EMAIL"
            type="text"
            id="emailSubscribe"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {showError && (
            <div className="text-left">
              <span className="text-error">Debe llenar este campo</span>
            </div>
          )}
        </div>
        <button type="submit" className="subscribe-button bg-primary-light">
          Subscribe
        </button>
      </form>
      {showSplash && (
        <SplashScreen onComplete={closeSplash} servicesLoaded={true} />
      )}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-content subscribe"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={toggleModal}>
              &times;
            </button>
            <div>
              <p className="text-center">¡Se suscribió correctamente!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;

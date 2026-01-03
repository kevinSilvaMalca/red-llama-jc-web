import { useContext, useEffect, useState } from 'react';
import AttendanceInfo from '../components/AttendanceInfo';
import ContactForm from '../components/ContactForm';
import CustomCard from '../components/CustomCard';
import Statistics from '../components/Statistics';
import '../styles/Home.css';
import OurMenu from './OurMenu';
import { DataContext } from '../context/Context';
import Spinner from '../components/Spinner';
// import usePromoData from '../hooks/usePromoData';
import { Link } from 'react-router-dom';

const Home = () => {
  const { promo, loadingPromo, loadingCategories } = useContext(DataContext);
  // const { promo, loadingPromo } = usePromoData();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    isModalOpen
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');
  }, [isModalOpen]);

  if (loadingCategories || loadingPromo) return <Spinner />;
  return (
    <>
      <div className="home-content mb-8">
        <div className="home-section-banner flex flex-col justify-center items-center md:items-start relative pb-[22px] mb-16 md:mb-36">
          <div className="banner-text mb-8 md:mb-0">
            <p className="text-[36px]/[38px] sm:text-[42px]/[46px] md:text-[62px]/[66px] lg:text-[82px]/[86px] xl:text-[102px]/[106px] tex-center md:text-left font-arual mb-3 md:mb-0">
              Peruvian <br className="hidden md:inline" />
              Elegance
            </p>
            {/* <p className="text-sm/[24px] md:text-base/5 lg:text-lg/6 xl:text-xl/7 text-center md:text-left hidden md:block">
              Experience the rich flavors of Peru with our gourmet <br />
              dishes, crafted to bring authentic taste to Connecticut.
            </p> */}
            {/* <p className="text-sm/[24px] text-center block md:hidden">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p> */}
          </div>
          <div className="w-full md:inset-x-0 md:bottom-0 md:absolute md:mb-10">
            <button className="home-button hidden md:inline">
              ORDER ONLINE
            </button>
            <button className="home-button inline md:hidden">EXPLORE</button>
          </div>
        </div>
        {isModalOpen && (
          <div className="modal-overlay" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={toggleModal}>
                &times;
              </button>
              <img
                src={promo.medium || 'https://via.placeholder.com/800x600'}
                // src={
                //   'https://admin.thetriplethree333.com/uploads/medium_flayer_08_27_2024_16fe43d7c5.png'
                // }
                alt="Banner"
                className="modal-image"
              />
            </div>
          </div>
        )}
        <section id="about" className="flex justify-center mb-16">
          <CustomCard pathImage="https://admin.thetriplethree333.com/uploads/medium_Seuz_d82f2c2a4e.png">
            <div className="home-about-section__detail">
              <p className="text-center lg:text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl/[50px] tracking-[.02em] font-[500] mb-8">
                Three signals transformative shifts ahead.<br></br>{' '}
                <span className="text-primary font-bold">
                  &quot;The Triple Three&quot;
                </span>
              </p>
              <div className="home-about-section__second flex flex-col lg:flex-row gap-y-8 justify-between items-center">
                <p className="text-left text-sm md:text-base/[27px] w-[81%]">
                  The presence of three suggests that major changes can be on
                  the horizon. Observing three as an angel number within a set
                  of three, four, or within a pattern reveals that massive
                  shifts may be in motion. These transformations happen from
                  within while your intuition is still weighing options. When a
                  set of three appears as an angel number, its message suggests
                  you're on the right path.
                </p>
                <Link to="/about" className="home-button home-about-section">
                  SEE MORE
                </Link>
              </div>
            </div>
          </CustomCard>
        </section>
        <section className="home-about-images mb-20 md:mb-[148px]">
          <div className="home-about-images__left"></div>
          <div className="home-about-images__right"></div>
        </section>

        <section id="menu" className="home-section-menu">
          <OurMenu></OurMenu>
        </section>

        <section className="home-section-statisctis mt-4 md:mt-8 mb-44">
          <Statistics></Statistics>
        </section>

        <section
          id="contact"
          className="home-section-attendance flex justify-center mb-[148px]"
        >
          <AttendanceInfo showLocation={false}></AttendanceInfo>
        </section>

        <section className="home-section-contact flex flex-col items-center justify-center">
          <ContactForm></ContactForm>
          <Link
            to="/contact"
            className="home-button home-about-section mt-[60px] md:mt-[80px]"
          >
            SEE MORE
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;

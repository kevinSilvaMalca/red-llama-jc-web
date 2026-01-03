import CustomCard from '../components/CustomCard';
import Statistics from '../components/Statistics';
import '../styles/About.css';

const About = () => {
  return (
    <>
      <div className="about-container">
        <section className="about-section-first flex justify-center">
          <CustomCard pathImage="https://admin.thetriplethree333.com/uploads/medium_Fondo_Primario_b40adbdfb9.png">
            <div className="home-about-section__detail">
              <p className="text-center lg:text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl/[50px] tracking-[.02em] font-[500] mb-8">
                Peruvian Delights:<br></br>{' '}
                <span className="text-primary font-bold">
                  Where Tradition Meets Tapas
                </span>
              </p>
              <div className="home-about-section__second flex flex-col lg:flex-row gap-y-8 justify-between items-center">
                <p className="text-left text-base md:text-[18px]/[27px] w-[81%]">
                  Welcome to The Triple Three, a Peruvian-American restaurant
                  where we blend authentic Peruvian flavors with a touch of
                  tapas. Our menu features classic Peruvian dishes, including
                  ceviches, seafood croquettes, and grilled seafood, alongside a
                  variety of meat and chicken options designed to appeal to
                  every palate. Experience our Peruvian and American fusion
                  cuisine, served tapas-style, for a unique and unforgettable
                  dining experience.
                </p>
              </div>
            </div>
          </CustomCard>
        </section>
        {/* <section className="about-section-second flex justify-center">
          <CustomCard pathImage="https://admin.thetriplethree333.com/uploads/about_video_1_8086027fec.png">
            <div className="home-about-section__detail">
              <p className="text-center lg:text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl/[50px] tracking-[.02em] font-[500] mb-8">
                Liquid Maestro, the newest hotspot in downtown Los Angeles. Our
                skilled mixologists are passionate about crafting exceptional
                cocktails that will{' '}
                <span className="text-primary font-bold">
                  delight your senses.
                </span>
              </p>
              <div className="home-about-section__second flex flex-col lg:flex-row gap-y-8 justify-between items-center">
                <p className="text-left text-base md:text-[18px]/[27px] w-[81%]">
                  With an ambiance that exudes elegance and a commitment to
                  delivering unforgettable experiences, Liquid Maestro is the
                  ultimate destination for cocktail enthusiasts. Join us for an
                  exquisite journey into the world of liquid artistry.
                </p>
              </div>
            </div>
          </CustomCard>
        </section>
        <section className="about-section-third flex justify-center">
          <CustomCard pathImage="https://admin.thetriplethree333.com/uploads/about_image_1_b73c812cbc.png">
            <div className="home-about-section__detail">
              <p className="text-center lg:text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl/[50px] tracking-[.02em] font-[500] mb-8">
                Liquid Maestro, the newest hotspot in downtown Los Angeles. Our
                skilled mixologists are passionate about crafting exceptional
                cocktails that will{' '}
                <span className="text-primary font-bold">
                  delight your senses.
                </span>
              </p>
              <div className="home-about-section__second flex flex-col lg:flex-row gap-y-8 justify-between items-center">
                <p className="text-left text-base md:text-[18px]/[27px] w-[81%]">
                  With an ambiance that exudes elegance and a commitment to
                  delivering unforgettable experiences, Liquid Maestro is the
                  ultimate destination for cocktail enthusiasts. Join us for an
                  exquisite journey into the world of liquid artistry.
                </p>
              </div>
            </div>
          </CustomCard>
        </section> */}
        <section className="home-about-images mb-[148px]">
          <div className="home-about-images__left"></div>
          <div className="home-about-images__right"></div>
        </section>
        <section className="about-section-statistics">
          <Statistics></Statistics>
        </section>
      </div>
    </>
  );
};

export default About;

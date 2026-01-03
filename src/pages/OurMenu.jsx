import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OurMenu.css';
import Spinner from '../components/Spinner';
import { DataContext } from '../context/Context';
import CategoryPanel from '../components/CategoryPanel';
import MenuFile from '../assets/files/ttt-menu.pdf';

const OurMenu = () => {
  const { categories, loading } = useContext(DataContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsPanelOpen(false);
  };

  const filteredMenu =
    selectedCategory === 'All'
      ? categories.flatMap((category) => category.items).slice(0, 6)
      : categories.find((category) => category.name === selectedCategory)
          ?.items || [];

  const handlerClick = () => {
    navigate('../card-menu');
  };


  const downloadFile = (fileName) => {
    // Simulate file download
    const link = document.createElement('a');
    link.href = `/downloads/${fileName}`;
    link.download = fileName;
    link.click();
  };

  // if (loading) return <Spinner />;
  // return (
  //   <>
  //     <div>
  //       <h1 className="title-cards text-secondary text-4xl/[50px] md:text-7xl font-cursive mb-6 md:mb-12">
  //         Our Best & Delicious <br className="inline md:hidden" />
  //         Menu
  //       </h1>

  //       <button
  //         className="category-button-panel text-[18] md:hidden"
  //         onClick={() => setIsPanelOpen(true)}
  //       >
  //         Categories
  //       </button>

  //       {isPanelOpen && (
  //         <CategoryPanel
  //           categories={categories}
  //           onSelectCategory={handleCategorySelect}
  //           onClose={() => setIsPanelOpen(false)}
  //           isOpen={isPanelOpen}
  //         />
  //       )}

  //       <div className="categories-menu overflow-x-auto whitespace-nowrap mb-4 md:mb-20">
  //         <button
  //           className={`category-button text-[18] ${
  //             selectedCategory === 'All' ? 'active' : ''
  //           }`}
  //           onClick={() => setSelectedCategory('All')}
  //         >
  //           All
  //         </button>
  //         {categories.map((category) => (
  //           <button
  //             key={category.id}
  //             className={`category-button ${
  //               selectedCategory === category.name ? 'active' : ''
  //             }`}
  //             onClick={() => setSelectedCategory(category.name)}
  //           >
  //             {category.name.toUpperCase()}
  //           </button>
  //         ))}
  //       </div>

  //       <div className="content-cards grid min-[992px]:grid-cols-2 grid-cols-1 gap-x-24 gap-y-4 md:gap-y-10 mb-12 md:mb-16">
  //         {filteredMenu.map((item, index) => (
  //           <div
  //             key={index}
  //             className="our-menu flex flex-col md:flex-row gap-x-4 mb-4"
  //           >
  //             <div className="our-menu__content w-full">
  //               <div className="our-menu__title flex justify-center gap-x-4 mb-2 w-full">
  //                 <span className="our-menu__title__name uppercase font-larsseit">
  //                   {item.name}
  //                 </span>
  //               </div>
  //               <div className="our-menu__description">
  //                 <p className="our-menu__description__paragraph font-cormorant">
  //                   {item.description}
  //                 </p>
  //               </div>
  //               <span className="our-menu__title__price text-left text-white-full block">
  //                 ${item.price}
  //               </span>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  if (loading) return <Spinner />;
  return (
    <>
      <div className="our-menu">
        <div className="menu-sections">
          {/* Menu Section */}
          <div className="menu-section mb-12 ">
            <h2 className="text-7xl font-cursive text-primary mb-6">Menu</h2>
            <button
              onClick={() => window.open('https://admin.thetriplethree333.com/uploads/MENU_THE_TRIPLE_THREE_333_2_cb1c37ac01.pdf', '_blank')}
              className="download-button text-white px-6 py-2 rounded"
            >
              Download Menu
            </button>
          </div>

          {/* Drink Section */}
          <div className="menu-section mb-12">
            <h2 className="text-7xl font-cursive text-primary mb-6">Drink</h2>
            <button
              
              onClick={() => window.open('https://admin.thetriplethree333.com/uploads/DRINKS_84e7b2d8cf.pdf', '_blank')}
              className="download-button text-white px-6 py-2 rounded"
            >
              Download Drink Menu
            </button>
          </div>

          {/* Happy Hour Section */}
          <div className="menu-section mb-12">
            <h2 className="text-7xl font-cursive text-primary mb-6">Happy Hour</h2>
            <button
              onClick={() => window.open('https://admin.thetriplethree333.com/uploads/Happy_Hour_V1_0_2eb8ff3587.pdf', '_blank')}
              className="download-button text-white px-6 py-2 rounded"
            >
              Download Happy Hour
            </button>
          </div>
        </div>

        {/* <div className="category-download mb-1 md:mb-2">
          {/* <button className="our-menu__button category-button-download text-sm/4 md:text-base/5">
            <a href={MenuFile} download={'MenuFile'} className="">
              DOWNLOAD
            </a>
          </button> }
          <button
            onClick={handlerClick}
            className="our-menu__button text-sm/4 md:text-base/5"
          >
            SEE ALL
          </button>
        </div> */}
      </div>
    </>
  );
};

export default OurMenu;

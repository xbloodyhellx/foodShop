import React from "react";
import Header from "../../components/Header/Header";
import BannerWithTitle from "../../components/BannerWithTitle/BannerWithTitle";
import Footer from "../../components/Footer/Footer";
import withMenu from "../../components/HOC/withMenu";
import Courses from "../../components/Courses/Courses";

function Menu({ category, filterHandler, activeCategory, filteredMenu }) {
  return (
    <>
      <Header />
      <BannerWithTitle title="منو" />
      <div className="flex justify-center content-center flex-wrap my-16 sm:my-20 md:my-28">
        <div className="w-full max-w-[1310px] flex justify-between flex-col items-center px-4 sm:px-8">
          <ul className="bg-white h-[108px] w-full rounded-[10px] shadow-md flex items-center justify-center p-0">
            {category.map((item) => (
              <li
                onClick={() => filterHandler(item)}
                className={`${
                  activeCategory == item && "!bg-[#F72F2C] text-white"
                } rounded-[10px] w-full list-none h-full text-center leading-[96px] text-[14px] sm:text-[17px] cursor-pointer`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex mt-[40px] sm:mt-[60px] md:mt-[90px] flex-wrap justify-center gap-4">
            {filteredMenu.map((item) => (
              <Courses key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withMenu(Menu);

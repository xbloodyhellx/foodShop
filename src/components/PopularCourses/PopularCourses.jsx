import React from "react";
import { Link } from "react-router-dom";
import CourseBox from "../CourseBox/CourseBox";
import withMenu from "../HOC/withMenu";
function PopularCourses({category,filterHandler,activeCategory,filteredMenu}) {
  return (
    <div className="w-full bg-[#F9F9FF]  py-16">
    <div className="w-[78%] flex flex-col items-center mx-auto">
      {/* Start Heading */}
      <div className="w-[100%]">
        <h1 className="text-[1.5rem]  font-bold">معروف ترین غذاها</h1>
        <p className="text-[#686868] max-w-[467px] my-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده از طراحان گرافیک است
        </p>
      </div>
      {/* Finish Heading */}

      {/* Start Category */}
      <div className="flex w-[100%] flex-wrap">
        {category.map((item) => (
          <button
            key={item}
            onClick={() => filterHandler(item)}
           className={`${activeCategory === item && "!bg-[#F72F2C] text-white"} text-[#585858] text-[15px] hover:text-white hover:bg-[#F72F2C] duration-300 m-[9px] bg-white border-none rounded-[12px] [box-shadow:0_0_15px_-10px_rgba(0,_0,_0,_0.75)] font-[Iranian Sans] px-4 py-1`}
          >
            {item}
          </button>
        ))}
      </div>
      {/* Finish Category */}

      {/* Start Body */}
      <div className="mt-[77px] max-w-[1200px] flex flex-wrap items-center justify-center">
        {filteredMenu.map((item) => (
          <CourseBox key={item.id} {...item} />
        ))}
      </div>
      {/* Finish Body */}

      {/* Start Btn Box */}
      <div className="w-[100%] flex justify-center items-center mx-[56px] mt-[50px]">
        <Link to={'/menu'} className="hover:bg-[#312323] duration-300 flex justify-center items-center bg-[#F72F2C] text-white rounded-[20px] w-[150px] h-[44px] text-[0.9rem]">
          موارد بیشتر
        </Link>
      </div>
      {/* Finish Btn Box */}
    </div>
    </div>
  );
}
export default withMenu(PopularCourses)

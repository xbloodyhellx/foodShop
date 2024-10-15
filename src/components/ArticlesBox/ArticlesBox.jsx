import React from "react";
import { Link } from "react-router-dom";

export default function ArticlesBox({ title, uuid }) {
  return (
    <Link to={`/blog/${uuid}`}>
      <div className="flex flex-col md:flex-row h-auto md:h-[249px] w-full md:w-[482px] border-b-[1px] border-b-[#9b9b9b] m-[17px] md:p-0 p-10 ">
        <div className="w-full md:w-[57%] h-auto md:h-[231px] ml-0 md:ml-[29px] mt-4 md:mt-0">
          <h3 className="text-[#424242] text-[15px] leading-[26px] font-bold">
            {title}
          </h3>
          <p className="text-[#545454] text-[14px] w-full leading-[22px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>
        <div className="w-full md:w-[44%] h-[123px] md:h-[231px] rounded-[10px]">
          <img
            className="w-full h-full object-cover rounded-[10px]"
            src="./img/articles/b1.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
}
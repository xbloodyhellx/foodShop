import React from "react";
import { Link } from "react-router-dom";
export default function AboutSection() {
  return (
    <div className="grid grid-cols-10  max-w-[1110px]  mx-auto my-32 ">
      <div className="flex flex-col justify-center  md:col-span-10 lg:col-span-5 col-span-10 p-4">
        <h1 className="text-[2rem] my-11 font-bold">درباره رستوران</h1>
        <p className="max-w-[458px] text-[16px] leading-[26px] text-[#7c7c7c]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
        </p>
        <Link className="hover:bg-[rgb(34,34,34)] mt-[35px] w-[158px] h-[40px] rounded-[7px] text-[white] leading-[33px] text-center bg-[#f42f2c] [transition:0.4s]" to={'/About'}>درباره ما</Link>
      </div>
      <div className="md:col-span-10 lg:col-span-5 col-span-10 p-4">
        <img
          className=" md:h-[400px] md:w-[500px] lg:h-[400px] lg:w-[500px]  size-[300px] rounded-[10px] w-full"
          src="./img/AboutSection/about-img.jpg.webp"
          alt=""
        />
      </div>
    </div>
  );
}

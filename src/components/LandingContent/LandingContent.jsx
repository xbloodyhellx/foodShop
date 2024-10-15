import React from "react";
import { Link } from "react-router-dom";
export default function LandingContent() {
  return (
    <div className="max-w-[1110px] p-4 flex flex-col justify-center h-screen mx-auto">
      <h6 className="max-w-[506px] text-[#c5c5c5] font-bold text-[16px] mt-[163px]">بهترین انتخاب ها</h6>
      <h1 className="my-[25px] max-w-[506px] text-[2rem] font-bold text-white">رستوران فودشاپ</h1>
      <p className="leading-[29px] max-w-[506px] text-white">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <Link className="hover:bg-[rgb(34,34,34)] mt-[35px] w-[158px] h-[40px] rounded-[7px] text-[white] leading-[33px] text-center bg-[#f42f2c] [transition:0.4s]" to={"/Menu"}>منو</Link>
    </div>
  );
}

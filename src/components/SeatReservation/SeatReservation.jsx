import React from "react";
import "./SeatReservation.css";

export default function SeatReservation() {
  return (
    <div className="min-h-[765px] flex justify-center SeatReservation">
      <div className="bg-[rgba(17,22,24,0.75)] w-full flex justify-center items-center">
        <div className="max-w-[1100px] w-full flex flex-wrap justify-center md:justify-between lg:justify-between p-4">
          <div className="max-w-[450px] w-full mb-8">
            <h1 className="text-white text-[1.5rem] md:text-[2rem] my-6 font-bold text-center md:text-right">
              صندلی هایتان را رزرو کنید
            </h1>
            <p className="text-white text-center md:text-right leading-[24px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <form
            action=""
            className="bg-white rounded-[10px] p-6 w-full max-w-[400px] flex flex-col items-center"
          >
            <input
              className="outline-none font-['Iranian Sans'] text-[15px] text-right w-full h-[40px] p-[10px] mb-[10px] border-[1px] border-solid border-[#d3d3d3] rounded-[7px]"
              placeholder="نام"
              type="text"
            />
            <input
              className="outline-none font-['Iranian Sans'] text-[15px] text-right w-full h-[40px] p-[10px] mb-[10px] border-[1px] border-solid border-[#d3d3d3] rounded-[7px]"
              placeholder="آدرس ایمیل"
              type="email"
            />
            <input
              className="outline-none font-['Iranian Sans'] text-[15px] text-right w-full h-[40px] p-[10px] mb-[10px] border-[1px] border-solid border-[#d3d3d3] rounded-[7px]"
              placeholder="شماره"
              type="text"
            />
            <input
              className="outline-none font-['Iranian Sans'] text-[15px] text-right w-full h-[40px] p-[10px] mb-[10px] border-[1px] border-solid border-[#d3d3d3] rounded-[7px]"
              placeholder="تاریخ رزرو"
              type="text"
            />
            <button
              className="font-['Iranian Sans'] text-[15px] w-[100%] h-[45px] mt-4 bg-[#f72f2c] text-[white] rounded-[7px] hover:bg-[#d02827] transition-colors"
              type="submit"
            >
              ثبت
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import BannerWithTitle from "../../components/BannerWithTitle/BannerWithTitle";
import Footer from "../../components/Footer/Footer";
import CardItem from '../../components/CardItem/CardItem';

export default function Card() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("itemCard"));
    setCourses(data);
  }, []);

  const closeHandler = (id) => {
    let newCourses = courses.filter((item) => {
      return item.id !== id;
    });
    setCourses(newCourses);
    localStorage.setItem("itemCard", JSON.stringify(newCourses));
  };

  return (
    <>
      <Header />
      <BannerWithTitle title="سبد خرید" />
      <div className="w-full py-16 flex justify-center items-center bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-10 w-full max-w-[1200px] px-4 sm:px-8 gap-8">
          {/* بخش محصولات */}
          <div className="col-span-10 lg:col-span-7">
            {/*  header */}
            <div className="w-full flex justify-between border-b pb-2">
              <div className="text-[#727272]">محصول</div>
              <div className="flex">
                <div className="mx-4 text-[#727272]">قیمت</div>
                <div className="mx-4 text-[#727272]">تعداد</div>
                <div className="mx-4 text-[#727272]">مجموع</div>
              </div>
            </div>
            {/* end header */}
            {/* body */}
            {courses.map((item) => (
              <CardItem key={item.id} closeHandler={closeHandler} {...item} />
            ))}
            {/* end body */}
          </div>
          {/* left box */}
          <div className="col-span-10 lg:col-span-3">
            <div className="bg-[#F9F9F9] border-dotted border-2 border-[#d9d9d9] flex flex-col items-center p-4">
              <div className="w-full">
                <div className="py-4 px-2 border-b text-[#696969]">
                  جمع سبد خرید
                </div>
                <div className="py-4 px-2 border-b text-[#696969] flex justify-between">
                  <span>جمع کل سبد خرید:</span>
                  <span>236000 تومان</span>
                </div>
                <div className="border-b mt-2">
                  <span className="text-[#696969]">شیوه ارسال:</span>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-[#696969] flex items-center">
                        <input className="ml-2" type="radio" name="send" />
                        ارسال رایگان
                      </div>
                      <div className="text-[#696969] flex items-center">
                        <input className="ml-2" type="radio" name="send" />
                        پست سفارشی
                      </div>
                      <div className="text-[#696969] flex items-center">
                        <input className="ml-2" type="radio" name="send" />
                        تحویل درب فروشگاه
                      </div>
                    </div>
                    <div>
                      <div className="text-[#696969]">0,000 تومان</div>
                      <div className="text-[#696969]">10,000 تومان</div>
                      <div className="text-[#696969]">20,000 تومان</div>
                    </div>
                  </div>
                  <div className="text-[#696969] mr-2 h-[90px] mt-4">آدرس</div>
                </div>
                <div className="flex justify-between my-4">
                  <span className="text-[#F72F2C]">مبلغ قابل پرداخت:</span>
                  <span className="text-[#F72F2C]">236,000 تومان</span>
                </div>
                <button className="text-[#F72F2C] p-2 border border-[#F72F2C] rounded-md w-full">
                  رفتن به صفحه پرداخت
                </button>
              </div>
            </div>
            <button className="mt-6 text-[#767676] hover:bg-[#F72F2C] hover:text-white transition duration-300 p-2 border border-[#cbcbcb] rounded-md w-full">
              ادامه خرید
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

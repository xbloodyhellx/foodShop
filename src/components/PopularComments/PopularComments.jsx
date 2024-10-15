import React from "react";
import CommentBox from "../CommentBox/CommentBox";
import "./PopularComments.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PopularComments() {
  return (
    <div className="PopularComments h-[492px] flex justify-center flex-wrap content-center">
      <div className="w-[100%]">
        <Swiper
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className=" flex justify-center">
            <CommentBox />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <CommentBox />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <CommentBox />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <CommentBox />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <CommentBox />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <CommentBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

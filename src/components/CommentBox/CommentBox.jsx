import React from "react";

export default function CommentBox() {
  return (
    <div className="bg-[white] [box-shadow:-4px_0_17px_#e4e4e4] rounded-[8px] flex flex-col items-center px-[31px] py-[17px]">
      <div className="border-[2px] border-[solid] border-[#F72F2C] rounded-[100%] w-[68px] h-[68px]">
        <img
          className="w-full h-full rounded-[100%]"
          src="./img/profile/kiumad-446bc1fee8f2aa3a96380cde6ea66c2e.jpeg"
          alt=""
        />
      </div>
      <h5 className="text-[#2e2e2e] text-[20px] text-center mx-[0] my-[22px]">
        محمد
      </h5>
      <p className="text-[#666464] text-[15px] text-center w-[340px] mx-[auto] my-[0]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده 
       از طراحان گرافیک است
      </p>
    </div>
  );
}
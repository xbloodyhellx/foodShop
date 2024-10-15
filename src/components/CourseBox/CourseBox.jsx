import React, { useContext, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import ChatIcon from "@mui/icons-material/Chat";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { MenuContext } from "../context/MenuContext";
export default function CourseBox(item) {
  const LocalMenu = useContext(MenuContext);

  const setCardItem = () => {
    let itemObg = {
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.img,
      count: 1,
    };

    let indexData = LocalMenu.menu.findIndex(
      (item) => item.title === itemObg.title
    );

    if (indexData !== -1) {
      LocalMenu.setMenu((prevState) => {
        const newState = [...prevState];
        newState[indexData].count++;
        return newState;
      });
    } else {
      LocalMenu.setMenu((prev) => [...prev, itemObg]);
    }
  };

  return (
    <div className="flex rounded-[20px] bg-[white] w-[294px] m-[30px] [box-shadow:0_0_15px_-10px_rgba(0,_0,_0,_0.75)] flex-col items-center">
      {/* Start Img Box */}
      <img
        className="w-[80%] h-[164px] rounded-[20px] mt-[17px]"
        src={item.img}
        alt=""
      />
      {/* Finish Img Box */}
      {/* Start Title */}
      <a className="w-[88%] text-[1.1rem] mt-[10px]" href="">
        {item.title}
      </a>
      {/* Finish Title */}
      {/* Start Text */}
      <div
        style={{ borderTop: "1px solid #e3e3e3" }}
        className="mt-[42px] flex w-[83%] justify-between px-[0] py-[10px]"
      >
        <div className="text-[0.9rem] flex items-center">
          <BorderColorIcon className="!text-[17px] text-[#548776] ml-[10px]" />
          <span>writer</span>
        </div>
        <a
          href=""
          className="text-[0.8rem] text-[#548776] bg-[#f1f5f9] font-bold rounded-[10px] px-[8px] py-0"
        >
          غذا
        </a>
      </div>
      {/* Finish Text */}
      {/* Start Info */}
      <div className="w-[85%] flex mt-[10px] justify-between">
        <div className="flex items-center">
          <VisibilityIcon className="!text-[17px] text-[#548776] mx-[6px] my-0" />
          <span className="text-[14px]">6</span>
          <ChatIcon className="!text-[17px] text-[#548776] mx-[6px] my-0" />
          <span className="text-[14px]">4</span>
        </div>
        <div className="flex items-center">
          <AvTimerIcon className="!text-[17px] text-[#548776] mx-[6px] my-0" />
          <span className="text-[14px]">زمان پخت :3 دقیقه</span>
        </div>
      </div>
      {/* Finish Info */}
      {/* Start More Box */}
      <button
        className="text-white text-[0.8rem] rounded-tl-none rounded-br-none rounded-tr-[15px] rounded-bl-[20px] bg-[#F72F2C] mr-auto  flex items-center px-[10px] py-[6px] mt-[10px]"
        onClick={setCardItem}
      >
        <span className=" ml-2">اضافه کردن</span>
        <KeyboardBackspaceIcon />
      </button>
      {/* Finish More Box */}
    </div>
  );
}

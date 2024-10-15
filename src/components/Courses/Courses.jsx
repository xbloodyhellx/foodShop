import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
export default function Courses(item) {
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
    <article className="flex flex-col sm:flex-row w-full sm:max-w-[550px] m-4">
      <img
        src={`${item.img}`}
        alt=""
        className="object-cover h-[171px] w-full sm:w-[207px] border-[2px] border-[solid] border-[#F72F2C] rounded-[5px]"
      />
      <div className="sm:mr-[28px] w-full flex flex-col justify-around mt-4 sm:mt-0">
        <div className="flex justify-between border-b border-dotted border-gray-300">
          <h4 className="mb-2">{item.title}</h4>
          <h4 className="mb-2 text-[#F72F2C]">{item.price} ریال</h4>
        </div>
        <p className="mb-0 leading-[27px]">{item.info}</p>
        <button
          onClick={setCardItem}
          className="mr-auto block hover:bg-[#222222] duration-300 border-none bg-[#F72F2C] text-white rounded-[8px] font-[yekan] text-[0.9rem] h-[34px] w-[107px] mt-4 sm:mt-0"
        >
          اضافه کردن
        </button>
      </div>
    </article>
  );
}

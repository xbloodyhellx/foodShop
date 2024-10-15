import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function CardItem({ title, price, id, closeHandler, count, img }) {
  const [countPrice, setCountPrice] = useState(count);
  const [sum, setSum] = useState(count * price);

  useEffect(() => {
    setSum(countPrice * price);
  }, [countPrice, price]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b py-6">
      <div className="flex items-center mb-4 md:mb-0">
        <img className="w-[72px] h-[78px] ml-4 md:ml-6" src={`${img}`} alt={title} />
        <p className="ml-4">{title}</p>
      </div>
      <div className="flex items-center">
        <span className="mx-4 md:mx-8">{price} تومان</span>
        <input
          className="text-center outline-none border border-gray-300 w-[40px] h-[40px] mx-4 md:mx-8 bg-white rounded-md"
          type="number"
          min="1"
          value={countPrice}
          onChange={(event) => setCountPrice(event.target.value)}
        />
        <span className="mx-4 md:mx-8 text-[#F72F2C]">{sum} تومان</span>
        <CloseIcon
          onClick={() => closeHandler(id)}
          className="ml-4 text-[#a1a1a1] cursor-pointer"
        />
      </div>
    </div>
  );
}

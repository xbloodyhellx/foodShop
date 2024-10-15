import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuContext } from "../context/MenuContext";

export default function Header() {
  const [littleHeader, setLittleHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const LocalMenu = useContext(MenuContext);



  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 200) {
        setLittleHeader(true);
      } else {
        setLittleHeader(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed w-full ${
        littleHeader && "bg-[rgba(17,_22,_24,_0.75)]"
      }`}
    >
      <div
        className={`${
          littleHeader ? "hidden" : "flex"
        } justify-center p-[20px]`}
      >
        <img src="./img/Logo/logo.png.webp" alt="Logo" />
      </div>
      <div className="border-t-[rgba(255,_255,_255,_0.2)] border-t-2 border-b-[rgba(255,_255,_255,_0.2)] border-b-2 max-w-[1035px] mx-[auto]">
        <div className="flex justify-center my-4">
          {isMobile ? (
            <MenuIcon
              className="text-white cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <ul className="flex justify-center">
              <Link to={"/"}>
                <li className="mr-[25px] text-[white] p-[8px] text-[15px] [transition:0.4s] hover:text-[rgb(231,29,29)]">
                  خانه
                </li>
              </Link>
              <Link to={"/menu"}>
                <li className="mr-[25px] text-[white] p-[8px] text-[15px] [transition:0.4s] hover:text-[rgb(231,29,29)]">
                  منو
                </li>
              </Link>
              <Link to={"/blog"}>
                <li className="mr-[25px] text-[white] p-[8px] text-[15px] [transition:0.4s] hover:text-[rgb(231,29,29)]">
                  بلاگ
                </li>
              </Link>
              <Link to={"/shopping-cart"} className="relative">
                <span className="absolute text-white mt-[-6px] right-[15px] rounded-full bg-[rgb(231,29,29)] w-[17px] h-[17px] flex justify-center items-center">
                  {LocalMenu.menu.length}
                </span>
                <li className="mr-[25px] text-[white] p-[8px] text-[15px] [transition:0.4s] hover:text-[rgb(231,29,29)]">
                  سبد خرید
                </li>
              </Link>
              <Link to={"/about-us"}>
                <li className="mr-[25px] text-[white] p-[8px] text-[15px] [transition:0.4s] hover:text-[rgb(231,29,29)]">
                  درباه ما
                </li>
              </Link>
              <Link to={"/contact-us"}>
                <li className="mr-[25px] text-[white] p-[8px] text-[15px] [transition:0.4s] hover:text-[rgb(231,29,29)]">
                  ارتباط با ما
                </li>
              </Link>
            </ul>
          )}
        </div>
        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <ul className="flex flex-col items-center  text-white py-4">
            <Link to={"/"}>
              <li className="text-white  mb-4 text-[15px] hover:text-[rgb(231,29,29)]">
                خانه
              </li>
            </Link>
            <Link to={"/menu"}>
              <li className="text-white  mb-4 text-[15px] hover:text-[rgb(231,29,29)]">
                منو
              </li>
            </Link>
            <Link to={"/blog"}>
              <li className="text-white  mb-4 text-[15px] hover:text-[rgb(231,29,29)]">
                بلاگ
              </li>
            </Link>
            <Link to={"/shopping-cart"}>
              <li className="text-white  mb-4 text-[15px] hover:text-[rgb(231,29,29)]">
                سبد خرید ({LocalMenu.menu.length})
              </li>
            </Link>
            <Link to={"/about-us"}>
              <li className="text-white  mb-4 text-[15px] hover:text-[rgb(231,29,29)]">
                درباه ما
              </li>
            </Link>
            <Link to={"/contact-us"}>
              <li className="text-white  mb-4 text-[15px] hover:text-[rgb(231,29,29)]">
                ارتباط با ما
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

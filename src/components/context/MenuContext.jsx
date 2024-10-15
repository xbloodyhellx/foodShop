import { createContext, useEffect, useState } from "react";
export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);


  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("itemCard")) || [];
    setMenu(data);
  }, []);


  useEffect(() => {
    localStorage.setItem("itemCard", JSON.stringify(menu));
  }, [menu]);


  return (
    <MenuContext.Provider value={{menu:menu,setMenu:setMenu}}>{children}</MenuContext.Provider>
  );
};
export default MenuContextProvider;

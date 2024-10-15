import React from "react";
import Routes from "./routes";
import { useRoutes } from "react-router-dom";
import MenuContextProvider from "./components/context/MenuContext";
export default function App() {
  let router = useRoutes(Routes);
  return (
    <>
      <MenuContextProvider>{router}</MenuContextProvider>
    </>
  );
}

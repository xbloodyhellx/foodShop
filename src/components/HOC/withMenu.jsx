import React, { useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wkqrnvnxxztxbqyevdig.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrcXJudm54eHp0eGJxeWV2ZGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNDQ1ODIsImV4cCI6MjAxMDcyMDU4Mn0.ToGY7fO8naCLNGKDiVDPfQo78Is1nBtnNWT3lZP7hPU";
const client = createClient(supabaseUrl, supabaseKey);

export default function withMenu(OriginalComponent) {
  const NewComponent = () => {
    const [menu, setMenu] = useState([]);
    const [category, setCategory] = useState(["همه"]);
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [activeCategory, setActiveCategory] = useState("همه");

    const getAllMenu = async () => {
      try {
        const result = await client.from("Food").select();
        const fetchedMenu = result.data.slice(-6);
        setMenu(fetchedMenu);
        setFilteredMenu(fetchedMenu);
      } catch (error) {
        console.error("Error getting data", error);
        throw error;
      }
    };

    useEffect(() => {
      getAllMenu();
    }, []);

    useEffect(() => {
      appendCategory();
    }, [menu]);

    const appendCategory = () => {
      let Category = [];
      menu.forEach((item) => {
        Category.push(item.Category);
      });
      setCategory([category[0], ...new Set(Category)]);
    };

    const filterHandler = (title) => {
      setActiveCategory(title); 
      if (title !== "همه") {
        let filteredMenu = menu.filter((item) => item.Category === title);
        setFilteredMenu(filteredMenu);
      } else {
        setFilteredMenu(menu);
      }
    };

    return (
      <OriginalComponent
        category={category}
        filterHandler={filterHandler}
        activeCategory={activeCategory}
        filteredMenu={filteredMenu}
      />
    );
  };
  return NewComponent;
}

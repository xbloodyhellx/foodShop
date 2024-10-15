import React, { useEffect, useState } from "react";
import ArticlesBox from "../ArticlesBox/ArticlesBox";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wkqrnvnxxztxbqyevdig.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrcXJudm54eHp0eGJxeWV2ZGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNDQ1ODIsImV4cCI6MjAxMDcyMDU4Mn0.ToGY7fO8naCLNGKDiVDPfQo78Is1nBtnNWT3lZP7hPU";
const client = createClient(supabaseUrl, supabaseKey);

export default function PopularArticles() {
  const [articles, setArticles] = useState([]);

  const getAllFromDatabase = async () => {
    try {
      const result = await client.from("Articles").select();
      setArticles(result.data.slice(-5));
    } catch (error) {
      console.error("Error getting data", error);
      throw error;
    }
  };

  useEffect(() => {
    getAllFromDatabase();
  }, []);

  return (
    <div className="flex justify-center items-center bg-[#F9F9FF] py-24">
      <div className="flex justify-center flex-wrap w-full max-w-[1070px] px-4">
        {articles.map((item) => (
          <ArticlesBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

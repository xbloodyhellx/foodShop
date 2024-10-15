import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import BannerWithTitle from "../../components/BannerWithTitle/BannerWithTitle";
import PopularBlogCard from "../../components/PopularBlogCard/PopularBlogCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import Footer from "../../components/Footer/Footer";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wkqrnvnxxztxbqyevdig.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrcXJudm54eHp0eGJxeWV2ZGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNDQ1ODIsImV4cCI6MjAxMDcyMDU4Mn0.ToGY7fO8naCLNGKDiVDPfQo78Is1nBtnNWT3lZP7hPU";
const client = createClient(supabaseUrl, supabaseKey);

export default function Blog() {
  const [articles, setArticles] = useState([]);

  const getAllFromDatabase = async () => {
    try {
      const result = await client.from("Articles").select();
      setArticles(result.data);
    } catch (error) {
      console.error("Error getting data", error);
      throw error;
    }
  };

  useEffect(() => {
    getAllFromDatabase();
  }, []);

  return (
    <>
      <Header />
      <BannerWithTitle title="بلاگ" />
      <div className="my-16 mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-10 gap-8 px-4 sm:px-8">
        {/* بخش مقالات */}
        <div className="col-span-1 md:col-span-7 flex flex-col items-center">
          {articles.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>

        {/* بخش جستجو و مقالات محبوب */}
        <div className="col-span-1 md:col-span-3 flex flex-col">
          <h5 className="text-[17px] mb-[20px]">جستجو</h5>
          <input
            className="p-[15px] w-full border border-solid border-[#e1e1e1] mb-8"
            type="text"
            placeholder="جستجوی مقاله مورد نظر"
          />
          <h5 className="mb-[20px]">محبوب‌ترین مقاله‌ها</h5>
          <div className="flex flex-col space-y-4">
            <PopularBlogCard />
            <PopularBlogCard />
            <PopularBlogCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

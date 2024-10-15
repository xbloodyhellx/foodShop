import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ title, uuid }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden my-9">
      <img
        className="w-full h-[500px] object-cover"
        src="./img/articles/b1.jpg.webp"
        alt="تصویر مقاله"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <h6 className="text-sm text-gray-600 mb-2">سلامت، فروشگاه</h6>
        <p className="text-gray-700 text-base mb-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم، لورم ایپسوم متن ساختگی
          با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        </p>
        <Link
          to={`/blog/${uuid}`}
          className="inline-block bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          ادامه خواندن
        </Link>
      </div>
    </div>
  );
}
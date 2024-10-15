import React from 'react';

export default function PopularBlogCard() {
  return (
    <div className='grid grid-cols-10 mt-5 border border-gray-300 rounded-lg overflow-hidden shadow-md'>
      <div className='col-span-6 p-3'>
        <time className='block text-xs text-gray-500'>22 اسفند 1401</time>
        <p className='text-sm text-gray-800 mt-2'>لورم ایپسوم متن ساختگی با تولید سادگی</p>
      </div>
      <div className='col-span-4'>
        <img className='w-full h-full object-cover' src="./img/articles/b1.jpg.webp" alt="تصویر بلاگ" />
      </div>
    </div>
  );
}
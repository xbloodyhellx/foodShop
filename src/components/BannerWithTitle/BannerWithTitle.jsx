import React from 'react';
import './BannerWithTitle.css';

export default function BannerWithTitle({ title }) {
  return (
    <div className="BannerWithTitle h-[365px] flex items-end justify-center">
      <h1 className="m-[50px] text-[2rem] font-bold text-white">{title}</h1>
    </div>
  );
}

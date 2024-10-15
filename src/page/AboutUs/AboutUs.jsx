import React from 'react'
import Header from "../../components/Header/Header";
import BannerWithTitle from "../../components/BannerWithTitle/BannerWithTitle";
import AboutSection from "../../components/AboutSection/AboutSection";
import PopularComments from "../../components/PopularComments/PopularComments";
import Footer from "../../components/Footer/Footer";
export default function AboutUs() {
  return (
    <>
      <Header/>
      <BannerWithTitle title='درباره ما'/>
      <AboutSection/>
      <PopularComments/>
      <Footer/>
    </>
  )
}

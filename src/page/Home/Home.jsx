import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import LandingContent from "../../components/LandingContent/LandingContent";
import AboutSection from "../../components/AboutSection/AboutSection";
import SeatReservation from "../../components/SeatReservation/SeatReservation";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import PopularComments from "../../components/PopularComments/PopularComments";
import PopularArticles from "../../components/PopularArticles/PopularArticles";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  return (
    <>
      <div className="Landing">
        <Header />
        <LandingContent />
      </div>
      <AboutSection />
      <SeatReservation />
      <PopularCourses />
      <PopularComments />
      <PopularArticles />
      <Footer /> 
    </>
  );
}

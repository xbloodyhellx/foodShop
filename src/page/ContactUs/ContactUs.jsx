import React from "react";
import Header from "../../components/Header/Header";
import BannerWithTitle from "../../components/BannerWithTitle/BannerWithTitle";
import Footer from "../../components/Footer/Footer";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactUs() {
  return (
    <>
      <Header />
      <BannerWithTitle title="ارتباط با ما" />

      {/* Map */}
      <div className="w-full">
        <iframe
          className="w-full h-[350px] md:h-[450px] border-1"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9153260142507!2d51.38365681567741!3d35.654457757364305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e002c2975c395%3A0xee6b34a3b5a88423!2sRashid%20Mousaie%20Gym!5e0!3m2!1sen!2s!4v1702817311540!5m2!1sen!2s"
        ></iframe>
      </div>
      {/* end Map */}

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8 my-16 px-4">
        {/* Contact Info */}
        <div className="lg:col-span-5">
          <h3 className="text-2xl mb-6">ارتباط با ما</h3>
          <p className="text-gray-600 mb-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.
          </p>
          <div className="border-t flex items-center text-gray-600 py-3">
            <ImportContactsIcon className="ml-3 text-red-500" />
            <span>آدرس: اصفهان، خیابان فردوسی، رو به روی بانک مسکن</span>
          </div>
          <div className="border-t flex items-center text-gray-600 py-3">
            <CallIcon className="ml-3 text-red-500" />
            <span>Infor@roadthemes.com</span>
          </div>
          <div className="border-t flex items-center text-gray-600 py-3">
            <EmailIcon className="ml-3 text-red-500" />
            <span>091383047</span>
          </div>
        </div>
        {/* end Contact Info */}

        {/* Contact Form */}
        <div className="lg:col-span-5">
          <h3 className="text-2xl mb-6">به ما بگویید</h3>
          <label className="mb-2" htmlFor="name">
            نام شما
          </label>
          <input
            className="border border-gray-300 mb-4 p-3 w-full outline-none"
            type="text"
            id="name"
            placeholder="نام خود را وارد کنید"
          />
          <label className="mb-2" htmlFor="email">
            ایمیل شما
          </label>
          <input
            className="border border-gray-300 mb-4 p-3 w-full outline-none"
            type="email"
            id="email"
            placeholder="ایمیل خود را وارد کنید"
          />
          <label className="mb-2" htmlFor="subject">
            موضوع
          </label>
          <input
            className="border border-gray-300 mb-4 p-3 w-full outline-none"
            type="text"
            id="subject"
            placeholder="موضوع پیام"
          />
          <label className="mb-2" htmlFor="message">
            پیام
          </label>
          <textarea
            className="border border-gray-300 p-3 w-full outline-none mb-6"
            id="message"
            rows="5"
            placeholder="پیام خود را بنویسید"
          ></textarea>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded shadow-md transition duration-300">
            ارسال
          </button>
        </div>
        {/* end Contact Form */}
      </div>

      <Footer />
    </>
  );
}

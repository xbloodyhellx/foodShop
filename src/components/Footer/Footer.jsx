import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  const socialMediaIcons = [
    <InstagramIcon key="instagram" />,
    <TelegramIcon key="telegram" />,
    <WhatsAppIcon key="whatsapp" />,
    <YouTubeIcon key="youtube" />
  ];

  const sections = [
    {
      title: 'فود شاپ',
      content: (
        <>
          <p className='w-[242px]'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی
            با تولید سادگی نامفهوم.
          </p>
          <div className="flex">
            {socialMediaIcons.map((icon, index) => (
              <div
                key={index}
                className="font-color rounded-[50%] border-solid border-[1px] border-[#8d8d8d] flex justify-center items-center w-[36px] h-[36px] my-[6px] mx-[10px]"
              >
                {icon}
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      title: 'لینک های مفید',
      links: ['درباره ما', 'خدمات', 'نحوه خرید', 'سوالات متداول', 'تماس با ما']
    },
    {
      title: 'خدمات مشتری',
      links: ['شیوه پرداخت', 'شیهوه ارسال محصول', 'قوانین و مقررات', 'خط مشی']
    },
    {
      title: 'حساب کاربری',
      links: ['ورود', 'سبد خرید', 'لیست علاقه مندی ها', 'پیگیری سفارشات', 'راهنما']
    }
  ];

  return (
    <footer className="border-t pt-[60px] flex justify-center flex-col items-center">
      <div className="max-w-[1200px] flex flex-wrap gap-20 justify-center">
        {sections.map((section, index) => (
          <div key={index} className="widget lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
            <h3 className="widget-title">{section.title}</h3>
            {section.content || (
              <div className="flex flex-col ">
                {section.links.map((link, index) => (
                  <Link to="" key={index}>{link}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-[85%] flex flex-col md:flex-row justify-between mt-[44px] text-[#787878] border-t">
        <div>این وب‌سایت یک نمونه کار است و محصولات و نظرات آن غیر واقعی هستند</div>
        <div>ساخته شده توسط رضایی</div>
      </div>
    </footer>
  );
}

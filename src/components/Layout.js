'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// زر واتساب ثابت مع تأثير حركي
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // تأخير ظهور الزر لتحسين تجربة المستخدم
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/+966563793970" // استبدل "yourphonenumber" برقم هاتفك
      className={`fixed bottom-6 right-6 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white p-5 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 animate-pulse"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.552 4.108 1.512 5.854L0 24l6.396-1.488A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5c-1.95 0-3.77-.5-5.354-1.38l-.38-.22-3.78.88.82-3.72-.24-.38A10.455 10.455 0 011.5 12c0-5.799 4.701-10.5 10.5-10.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5zm5.25-7.5c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.15 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
};

// عناصر الخلفية المتحركة
const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* فيديو الخلفية */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0 pointer-events-none select-none"
      >
        <source src="/13061092_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[var(--primary-color)]/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[var(--secondary-color)]/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-300/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <BackgroundElements />
      
      <div className={`relative min-h-screen flex flex-col transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Layout;

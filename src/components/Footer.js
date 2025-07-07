import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // تأخير ظهور التذييل لتحسين تجربة المستخدم
    const timer = setTimeout(() => {
      setVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={`bg-black/30 backdrop-blur-sm text-white py-6 transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 ">
            <div className="flex">
              <Link href='/about' className="text-lg font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">من نحن</Link>
              <Link href='/terms' className="text-lg mx-4 font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">الشروط والأحكام</Link>
              <Link href='/privacy' className="text-lg font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">سياسة الخصوصية</Link>
            </div>
            <p className="text-sm text-gray-300 mt-1">© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover-lift hover:text-[var(--primary-color)] transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.73 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.79a4.28 4.28 0 001.32 5.71 4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 004 2.97A8.59 8.59 0 012 19.54a12.12 12.12 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56a8.68 8.68 0 002.14-2.22z" />
              </svg>
            </a>
            <a href="#" className="hover-lift hover:text-[var(--primary-color)] transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.6 8.06 8 8.78v-6.22h-2.4v-2.56h2.4v-1.96c0-2.4 1.44-3.72 3.64-3.72 1.04 0 2.12.18 2.12.18v2.32h-1.2c-1.18 0-1.56.74-1.56 1.5v1.68h2.68l-.42 2.56h-2.26v6.22c4.4-.72 8-4.36 8-8.78 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="hover-lift hover:text-[var(--primary-color)] transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.604-2.665-.3-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.521.116-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.004 2.042.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.655.241 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

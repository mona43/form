'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [symbol, setSymbol] = useState('TVC:GOLD');
  const { ref: counterRef, inView: counterInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // TradingView widget effect
  useEffect(() => {
    // إزالة أي رسم بياني سابق
    const container = document.getElementById('tradingview_chart');
    if (container) container.innerHTML = '';
    // إضافة السكريبت
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.TradingView) {
        // @ts-ignore
        new window.TradingView.widget({
          container_id: 'tradingview_chart',
          width: '100%',
          height: 500,
          symbol: symbol,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '1',
          locale: 'ar',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          hide_legend: false,
          save_image: false
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [symbol]);

  // خيارات الرسم البياني مع أيقونات SVG
  const chartOptions = [
    {
      label: 'النفط', symbol: 'TVC:USOIL',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="8" ry="3"/><path d="M4 7v7c0 1.66 3.58 3 8 3s8-1.34 8-3V7"/><path d="M4 14v3c0 1.66 3.58 3 8 3s8-1.34 8-3v-3"/></svg>
      )
    },
    {
      label: 'الذهب', symbol: 'TVC:GOLD',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><rect x="7" y="7" width="10" height="4" rx="1"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
      )
    },
    {
      label: 'البلاتينوم', symbol: 'TVC:PLAT',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 8h8v8H8z"/></svg>
      )
    },
    {
      label: 'جوجل', symbol: 'NASDAQ:GOOGL',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 48 48"><g><circle fill="#fff" cx="24" cy="24" r="24"/><path fill="#4285F4" d="M34.6 24.2c0-.7-.1-1.4-.2-2H24v4.1h6c-.3 1.5-1.4 2.7-2.9 3.5v2.9h4.7c2.7-2.5 4.3-6.1 4.3-10.5z"/><path fill="#34A853" d="M24 36c3.6 0 6.6-1.2 8.8-3.2l-4.7-2.9c-1.3.9-3 1.4-4.1 1.4-3.2 0-5.9-2.1-6.8-5h-4.8v3.1C15.2 33.8 19.3 36 24 36z"/><path fill="#FBBC05" d="M17.2 26.3c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2v-3.1h-4.8C11.5 21.2 11 22.5 11 24s.5 2.8 1.4 4.1l4.8-3.8z"/><path fill="#EA4335" d="M24 18.9c1.9 0 3.6.7 4.9 2l3.7-3.7C32.6 14.8 29.6 13.5 24 13.5c-4.7 0-8.8 2.2-11.1 5.5l4.8 3.8c.9-2.9 3.6-5 6.8-5z"/></g></svg>
      )
    },
    {
      label: 'تويتر', symbol: 'NYSE:TWTR',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.73 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.79a4.28 4.28 0 001.32 5.71 4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 004 2.97A8.59 8.59 0 012 19.54a12.12 12.12 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56a8.68 8.68 0 002.14-2.22z"/></svg>
      )
    },
    {
      label: 'فيسبوك', symbol: 'NASDAQ:META',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.6 8.06 8 8.78v-6.22h-2.4v-2.56h2.4v-1.96c0-2.4 1.44-3.72 3.64-3.72 1.04 0 2.12.18 2.12.18v2.32h-1.2c-1.18 0-1.56.74-1.56 1.5v1.68h2.68l-.42 2.56h-2.26v6.22c4.4-.72 8-4.36 8-8.78 0-5.52-4.48-10-10-10z"/></svg>
      )
    },
    {
      label: 'سناب شات', symbol: 'NYSE:SNAP',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm2.293-7.293l-1.293 1.293V7h-2v7.586l-1.293-1.293-1.414 1.414L12 18l4.707-4.707-1.414-1.414z"/></svg>
      )
    },
    {
      label: 'مايكروسوفت', symbol: 'NASDAQ:MSFT',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="9" height="9"/><rect x="13" y="2" width="9" height="9"/><rect x="2" y="13" width="9" height="9"/><rect x="13" y="13" width="9" height="9"/></svg>
      )
    },
    {
      label: 'آبل', symbol: 'NASDAQ:AAPL',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07zm-2.07 3.6c-2.07 0-3.6 1.53-3.6 3.6 0 1.53.93 2.7 2.07 3.6-1.14.9-2.07 2.07-2.07 3.6 0 2.07 1.53 3.6 3.6 3.6s3.6-1.53 3.6-3.6c0-1.53-.93-2.7-2.07-3.6 1.14-.9 2.07-2.07 2.07-3.6 0-2.07-1.53-3.6-3.6-3.6z"/></svg>
      )
    },
  ];

  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center">
          <section className="h-52 my-12 p-10  max-w-7xl w-full" data-aos="fade-up">
          <p className="text-center my-6 text-lg text-white">
              يمكنك التسجيل في الأسهم المالية من خلال كتابة الاسم ، الايميل ، ورقم الواتساب.
            </p>
            <Link 
              href="/form"
              className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white hover:scale-105 px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl block text-center w-fit mx-auto"
            >
              سجل الآن
            </Link>
            
          </section>
          {/* about */}
          <section className="py-12 p-10 w-full bg-white mx-auto" data-aos="fade-up">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* النص والكروت */}
              <div className="w-full md:w-1/2 flex flex-col items-start pr-0 md:pr-12 pl-0 md:pl-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-right text-gray-900 mb-2 border-b-4 border-[var(--primary-color)] w-fit pb-1 px-2">من نحن</h2>
                <p className="text-gray-700 text-base sm:text-lg mb-8 text-right">
                  رواد في عالم التداول عبر الإنترنت ، نحن أكثر من مجرد شركة التي توفر أحدث الأدوات. طموحنا هو أن نكون وسيطاً رائداً في جميع جوانب التداول. بالإضافة إلى ذلك، نعتقد أنه من الضروري بالنسبة لنا بناء علاقة طويلة الأمد مع مستثمرينا.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {/* Card 1 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:border-[var(--secondry-color)] ">
                      {/* رقابية أيقونة */}
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0110 0v4" /></svg>
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">رقابية</h3>
                      <p className="text-gray-600 text-sm">نحن نعمل وفق المعايير الرقابية الدولية</p>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg border-2 border-[var(--primary-color)] text-[var(--primary-color)]">
                      {/* التكنولوجيا أيقونة */}
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 7V4m0 0h3m-3 0v3m16-3v3m0-3h-3m3 0v3M4 17v3m0 0h3m-3 0v-3m16 3v-3m0 3h-3m3 0v-3" /></svg>
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">التكنولوجيا</h3>
                      <p className="text-gray-600 text-sm">نقدم لك اكثر منصات التداول تطوراً وتقدماً</p>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg border-2 border-[var(--primary-color)] text-[var(--primary-color)]">
                      {/* الأمان أيقونة */}
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5.25-3.5 9.75-8 11-4.5-1.25-8-5.75-8-11V7l8-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">الأمان</h3>
                      <p className="text-gray-600 text-sm">جميع البيانات تحفظ بتكنولوجيا مشفرة</p>
                    </div>
                  </div>
                  {/* Card 4 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg border-2 border-[var(--primary-color)] text-[var(--primary-color)]">
                      {/* الدعم أيقونة */}
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 10c0-3.314-2.686-6-6-6S6 6.686 6 10c0 2.577 1.613 4.773 4 5.659V20h4v-4.341c2.387-.886 4-3.082 4-5.659z" /></svg>
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">الدعم</h3>
                      <p className="text-gray-600 text-sm">نتأكد من حصولك على الدعم الكامل الذي تحتاجه</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* الصورة */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/true.jpg" alt="من نحن" className="rounded-xl shadow-lg object-cover max-h-[350px] w-full md:w-[90%]" />
              </div>
            </div>
          </section>

          {/* لماذا الوثوق بنا */}
          <section className="py-16 p-10 w-full bg-white mx-auto" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#183153] mb-2">لماذا الوثوق بنا</h2>
            <div className="h-1 w-32 bg-[var(--primary-color)] mx-auto mb-6 rounded"></div>
            <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
              دعنا نذكرك بعض الأشياء عن أنفسنا، والتي يمكن أن توفر لك سبباً مقنعاً للاختيارنا.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl overflow-hidden flex flex-col items-center border border-gray-200">
                <img src="/gif.png" alt="الجوائز التي حصلنا عليها" className="w-full h-48 object-cover" />
                <div className="flex flex-col items-center p-6 pt-0 -mt-8">
                  <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center -mt-10 hover:bg-[var(--secondary-color)] transition-all duration-300">
                    {/* أيقونة جائزة */}
                    <svg className="w-10 h-10 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17l-4 4m0 0l-4-4m4 4V3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="8" r="4"/></svg>
                  </div>
                  <h3 className="font-bold text-xl mt-4 mb-2 text-center">الجوائز التي حصلنا عليها</h3>
                  <p className="text-gray-600 text-center text-base">الجوائز العديدة التي حصلنا عليها هي إثبات لمدى قيمة الشركة.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-xl overflow-hidden flex flex-col items-center border border-gray-200">
                <img src="/muslim-woman-jijab-is-wearing-headset-call-center-operator_87646-30219.avif" alt="دعم مخصص بالكامل" className="w-full h-48 object-cover" />
                <div className="flex flex-col items-center p-6 pt-0 -mt-8">
                  <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center -mt-10 hover:bg-[var(--secondary-color)] transition-all duration-300">
                    {/* أيقونة دعم */}
                    <svg className="w-10 h-10 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 018 0v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <h3 className="font-bold text-xl mt-4 mb-2 text-center">دعم مخصص بالكامل</h3>
                  <p className="text-gray-600 text-center text-base">فريق خدمة العملاء لدينا من المحترفين متاح على مدار 24/7 للإجابة على أي استفسار</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-xl overflow-hidden flex flex-col items-center border border-gray-200">
                <img src="/tadawol_alashom_lel_mobtadi2in.jpeg" alt="خيارات تداول مرنة" className="w-full h-48 object-cover" />
                <div className="flex flex-col items-center p-6 pt-0 -mt-8">
                  <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center -mt-10 hover:bg-[var(--secondary-color)] transition-all duration-300">
                    {/* أيقونة تداول */}
                    <svg className="w-10 h-10 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="font-bold text-xl mt-4 mb-2 text-center">خيارات تداول مرنة</h3>
                  <p className="text-gray-600 text-center text-base">تتيح لك مجموعة العروض المتنوعة لدينا الحصول على مسيرة استثمارية مخصصة.</p>
                </div>
              </div>
            </div>
          </section>

          {/* عداد الأرقام */}
          <section ref={counterRef} className="my-12 py-10 px-4 text-white max-w-7xl w-full" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-extrabold mb-2">
                  <CountUp start={0} end={counterInView ? 2999 : 0} duration={2} separator="," />+
                </span>
                <span className="text-lg font-semibold">عملاء الشركة</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-extrabold mb-2">
                  <CountUp start={0} end={counterInView ? 13111 : 0} duration={2.5} separator="," />+
                </span>
                <span className="text-lg font-semibold">حسابات التداول</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-extrabold mb-2">
                  <CountUp start={0} end={counterInView ? 877 : 0} duration={2} separator="," />+
                </span>
                <span className="text-lg font-semibold">جوائز</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-extrabold mb-2">
                  <CountUp start={0} end={counterInView ? 2310 : 0} duration={2} separator="," />+
                </span>
                <span className="text-lg font-semibold">الشركات الزميلة</span>
              </div>
            </div>
          </section>
          
          {/* TradingView Chart Section */}
          <section className="py-16 p-10 w-full bg-white mx-auto" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#183153] mb-2">رسوم بيانية مباشرة</h2>
            <div className="h-1 w-32 bg-[var(--primary-color)] mx-auto mb-6 rounded"></div>
            <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
              تم تزويد منصتنا بمجموعة رائعة من ميزات التداول والتحليل المتقدمة.
            </p>
            <div className="flex flex-col md:flex-row-reverse gap-8 items-start justify-center max-w-7xl mx-auto">
              {/* الرسم البياني */}
              <div className="flex-1 min-w-0 overflow-auto p-4 flex justify-center">
                <div className="w-full max-w-3xl" style={{ minWidth: 0 }}>
                  <div className="bg-white rounded-xl overflow-hidden" style={{ boxShadow: 'none' }}>
                    <div id="tradingview_chart" style={{ width: '100%', minHeight: 300, height: '40vw', maxHeight: 500 }}></div>
                  </div>
                </div>
              </div>
              {/* الخيارات */}
              <div className="w-full md:w-64 flex flex-col gap-3">
                {chartOptions.map((opt, idx) => (
                  <button
                    key={opt.symbol}
                    onClick={() => setSymbol(opt.symbol)}
                    className={`flex items-center justify-between cursor-pointer w-full bg-white border-r-4 transition-all duration-200 rounded-lg px-4 py-3 text-lg font-bold shadow-sm hover:bg-gray-50 focus:bg-gray-100 border-[var(--primary-color)] ${symbol === opt.symbol ? 'bg-[var(--primary-color)]/10 border-[var(--primary-color)]' : 'border-[var(--secondary-color)]'}`}
                  >
                    <span className="flex items-center gap-2">
                      {opt.icon}
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
          
      </div>
    </Layout>
  );
}

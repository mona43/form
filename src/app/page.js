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
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg border-2 border-[var(--primary-color)] text-[var(--primary-color)]">
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
                <img src="/office.jpg" alt="من نحن" className="rounded-xl shadow-lg object-cover max-h-[350px] w-full md:w-[90%]" />
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
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center border border-gray-200">
                <img src="/award.jpg" alt="الجوائز التي حصلنا عليها" className="w-full h-48 object-cover" />
                <div className="flex flex-col items-center p-6 pt-0 -mt-8">
                  <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center -mt-10 border-4 border-white">
                    {/* أيقونة جائزة */}
                    <svg className="w-10 h-10 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17l-4 4m0 0l-4-4m4 4V3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="8" r="4"/></svg>
                  </div>
                  <h3 className="font-bold text-xl mt-4 mb-2 text-center">الجوائز التي حصلنا عليها</h3>
                  <p className="text-gray-600 text-center text-base">الجوائز العديدة التي حصلنا عليها هي إثبات لمدى قيمة الشركة.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center border border-gray-200">
                <img src="/support.jpg" alt="دعم مخصص بالكامل" className="w-full h-48 object-cover" />
                <div className="flex flex-col items-center p-6 pt-0 -mt-8">
                  <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center -mt-10 border-4 border-white">
                    {/* أيقونة دعم */}
                    <svg className="w-10 h-10 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 018 0v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <h3 className="font-bold text-xl mt-4 mb-2 text-center">دعم مخصص بالكامل</h3>
                  <p className="text-gray-600 text-center text-base">فريق خدمة العملاء لدينا من المحترفين متاح على مدار 24/7 للإجابة على أي استفسار</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center border border-gray-200">
                <img src="/trade.jpg" alt="خيارات تداول مرنة" className="w-full h-48 object-cover" />
                <div className="flex flex-col items-center p-6 pt-0 -mt-8">
                  <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center -mt-10 border-4 border-white">
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
              <div className="flex-1 min-w-0  overflow-auto p-4 flex justify-center">
                <div className="w-full" style={{ minWidth: 320, maxWidth: 800 }}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div id="tradingview_chart" style={{ minHeight: 400 }}></div>
                  </div>
                </div>
              </div>
              {/* الخيارات */}
              <div className="w-full md:w-64 flex flex-col gap-3">
                {[
                  { label: 'النفط', symbol: 'TVC:USOIL', icon: '/oil.png' },
                  { label: 'الذهب', symbol: 'TVC:GOLD', icon: '/gold.png' },
                  { label: 'البلاتينوم', symbol: 'TVC:PLAT', icon: '/platinum.png' },
                  { label: 'جوجل', symbol: 'NASDAQ:GOOGL', icon: '/google.png' },
                  { label: 'تويتر', symbol: 'NYSE:TWTR', icon: '/twitter.png' },
                  { label: 'فيسبوك', symbol: 'NASDAQ:META', icon: '/facebook.png' },
                  { label: 'سناب شات', symbol: 'NYSE:SNAP', icon: '/snapchat.png' },
                  { label: 'مايكروسوفت', symbol: 'NASDAQ:MSFT', icon: '/microsoft.png' },
                  { label: 'آبل', symbol: 'NASDAQ:AAPL', icon: '/apple.png' },
                ].map((opt, idx) => (
                  <button
                    key={opt.symbol}
                    onClick={() => setSymbol(opt.symbol)}
                    className={`flex items-center justify-between cursor-pointer w-full bg-white border-r-4 transition-all duration-200 rounded-lg px-4 py-3 text-lg font-bold shadow-sm hover:bg-gray-50 focus:bg-gray-100 border-[var(--primary-color)] ${symbol === opt.symbol ? 'bg-[var(--primary-color)]/10 border-[var(--primary-color)]' : 'border-transparent'}`}
                  >
                    <span className="flex items-center gap-2">
                      <img src={opt.icon} alt={opt.label} className="w-6 h-6" />
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

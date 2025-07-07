import Layout from '@/components/Layout';


export default function About() {
  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center p-8">
        <section className="my-12 p-10 rounded-xl border border-gray-100 text-white backdrop-blur-sm bg-white/5 shadow-xl max-w-7xl w-full">
          <h2 className="text-3xl font-bold text-center mb-6 inline-block bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-transparent bg-clip-text">من نحن</h2>
          <div className="leading-relaxed text-right space-y-4">
            <p className="transition-all duration-300 hover:translate-x-1">
              نحن شركة مالية سعودية مرخصة من هيئة السوق المالية، نعمل على تقديم خدمات متكاملة في مجال الأوراق المالية تشمل التعامل، الحفظ، المشورة، الترتيب، إدارة الاستثمارات، وتشغيل الصناديق.
            </p>
            <p className="transition-all duration-300 hover:translate-x-1">
              نسعى إلى تمكين المستثمرين من الوصول إلى فرص استثمارية متنوعة من خلال حلول مالية مبتكرة، مدعومة بفريق متخصص وخبرة إقليمية وعالمية.
            </p>
            <p className="transition-all duration-300 hover:translate-x-1">
              نلتزم بأعلى معايير الشفافية والامتثال، ونعمل على بناء شراكات طويلة الأمد مع عملائنا من الأفراد والمؤسسات، مع التركيز على تقديم قيمة مستدامة ونمو حقيقي.
            </p>
            <p className="transition-all duration-300 hover:translate-x-1">
              لدينا أيضاً ذراع خدمات داعم يعزز كفاءة عملياتنا ويساهم في تقديم تجربة مميزة.
            </p>
            <p className="transition-all duration-300 hover:translate-x-1 flex items-center gap-2 mt-6"><a href="https://wa.me/+966563793970" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--primary-color)] hover:underline"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.646.86 5.12 2.49 7.22L4 29l7.02-2.44A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.13 0-4.21-.62-5.97-1.8l-.43-.27-4.17 1.45 1.44-4.06-.28-.44A10.93 10.93 0 015.083 15c0-6.032 4.885-10.917 10.917-10.917S26.917 8.968 26.917 15 22.032 25.917 16 25.917zm5.29-7.13c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/></svg>تواصل معنا عبر الواتساب: <span dir="ltr">+966 56 379 3970</span></a></p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
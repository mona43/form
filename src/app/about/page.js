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
          </div>
        </section>
      </div>
    </Layout>
  );
}
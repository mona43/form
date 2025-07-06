import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center p-8">
          <section className="my-12 p-10 rounded-xl border border-gray-100 text-white backdrop-blur-sm bg-white/5 shadow-xl max-w-7xl w-full">
            <Link 
              href="/form"
              className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white hover:scale-105 px-8 py-6 rounded-2xl text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl block text-center"
            >
              سجل الآن
            </Link>
            <p className="text-center mt-4">
              يمكنك التسجيل في الأسهم المالية من خلال كتابة الاسم ، الايميل ، ورقم الواتساب.
            </p>
          </section>
      </div>
    </Layout>
  );
}

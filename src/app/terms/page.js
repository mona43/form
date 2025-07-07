import Layout from '@/components/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center p-8">
        <section className="my-12 p-10 rounded-xl border border-gray-100 text-white backdrop-blur-sm bg-white/5 shadow-xl max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 inline-block bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-transparent bg-clip-text">الشروط والأحكام</h2>
        <div className="text-white rounded-xl shadow p-8  leading-relaxed">
          <h2 className="text-xl font-bold mb-4">مقدمة</h2>
          <p className="mb-4">يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام هذا الموقع. باستخدامك للموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام بالكامل. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام الموقع.</p>
          <h2 className="text-xl font-bold mb-4 mt-8">استخدام الموقع</h2>
          <ul className="list-disc pr-6 space-y-2 mb-4">
            <li>يجب أن يكون استخدامك للموقع لأغراض قانونية فقط وبما يتوافق مع جميع القوانين واللوائح المعمول بها.</li>
            <li>لا يجوز لك استخدام الموقع بأي طريقة قد تضر أو تعطل الموقع أو تتداخل مع استخدام الآخرين له.</li>
            <li>يحتفظ الموقع بالحق في تعديل أو إيقاف أي جزء من الموقع في أي وقت دون إشعار مسبق.</li>
          </ul>
          <h2 className="text-xl font-bold mb-4 mt-8">حقوق الملكية الفكرية</h2>
          <p className="mb-4">جميع المحتويات المعروضة على الموقع، بما في ذلك النصوص والصور والشعارات والتصاميم، هي ملك للموقع أو للجهات المرخصة له، ولا يجوز نسخها أو إعادة إنتاجها أو استخدامها بأي شكل دون إذن كتابي مسبق.</p>
          <h2 className="text-xl font-bold mb-4 mt-8">سياسة الخصوصية</h2>
          <p className="mb-4">نحن ملتزمون بحماية خصوصيتك. يرجى مراجعة <a href="/privacy" className="text-[var(--primary-color)] underline">سياسة الخصوصية</a> لمعرفة المزيد حول كيفية جمع واستخدام وحماية معلوماتك الشخصية.</p>
          <h2 className="text-xl font-bold mb-4 mt-8">تعديلات الشروط</h2>
          <p className="mb-4">يحتفظ الموقع بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر التعديلات على هذه الصفحة، ويعتبر استمرارك في استخدام الموقع بعد نشر التعديلات موافقة منك على الشروط المعدلة.</p>
          <h2 className="text-xl font-bold mb-4 mt-8">الاتصال بنا</h2>
          <p>إذا كان لديك أي استفسار بخصوص هذه الشروط والأحكام، يرجى التواصل معنا عبر صفحة <a href="/about" className="text-[var(--primary-color)] underline">من نحن</a>.</p>
        </div>
        </section>
      </div>
    </Layout>
  );
} 
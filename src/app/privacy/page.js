import Layout from '../../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center p-8">
        <section className="my-12 p-10 rounded-xl border border-gray-100 text-white backdrop-blur-sm bg-white/5 shadow-xl max-w-7xl w-full">
          <h2 className="text-3xl font-bold text-center mb-6 inline-block bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-transparent bg-clip-text">سياسة الخصوصية</h2>
          <div className="text-white rounded-xl shadow p-8 leading-relaxed">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.75-8 11-4.5-1.25-8-5.75-8-11V7l8-4z"/><path d="M9 12l2 2 4-4"/></svg>بيان الخصوصية</h2>
            <p className="mb-4">نحن ملتزمون بحماية خصوصيتك والحفاظ على سرية معلوماتك الشخصية والمالية. يوضح بيان الخصوصية التالي كيفية جمعنا لمعلوماتك واستخدامها وحمايتها. باستخدامك لموقعنا الإلكتروني أو بفتح حساب معنا، فإنك توافق على ممارسات جمع واستخدام المعلومات كما هو موضح في هذا البيان.</p>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 7l9 6 9-6"/></svg>جمع المعلومات الشخصية</h2>
            <p className="mb-4">نقوم بجمع المعلومات الضرورية لفتح الحسابات، وإتمام المعاملات بكفاءة، وحماية أصولك وخصوصيتك.<br/>تشمل هذه المعلومات:</p>
            <ul className="list-disc pr-6 mb-4">
              <li>الاسم، عنوان البريد، رقم الهاتف، وعنوان البريد الإلكتروني للتواصل معك.</li>
              <li>بيانات ديموغرافية عند فتح حساب مثل تاريخ الميلاد، التعليم، المهنة، إلخ.</li>
              <li>تقييم خبرتك في التداول، الدخل السنوي التقريبي، وصافي الثروة لتقييم وضعك المالي.</li>
            </ul>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>استخدام المعلومات الشخصية</h2>
            <p className="mb-4">نستخدم المعلومات الشخصية فقط لتقديم خدمات ذات جودة عالية وضمان الأمان، مثل:</p>
            <ul className="list-disc pr-6 mb-4">
              <li>التحقق من هويتك وتفاصيل الاتصال.</li>
              <li>إدارة حسابك وإعداد رقم حساب وكلمة مرور آمنة.</li>
              <li>تخصيص تجربتك على الموقع وإعلامك بالعروض أو الخدمات التي قد تهمك.</li>
            </ul>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8a5 5 0 01-10 0"/><path d="M12 17v2m-4 0h8"/></svg>شركاؤنا وشركاتنا التابعة</h2>
            <p className="mb-4">قد نشارك المعلومات مع شركائنا أو الشركات التابعة لنا لتقديم المنتجات والخدمات التي طلبتها أو لإتاحة فرص إضافية قد تكون ذات قيمة لك.<br/>يقتصر استخدام معلوماتك على الأغراض المحددة في علاقتنا مع الشريك أو الشركة التابعة.</p>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/><line x1="4" y1="4" x2="20" y2="20"/></svg>أطراف ثالثة غير تابعة</h2>
            <p className="mb-4">لا نبيع أو نرخص أو نؤجر أو نفصح عن معلوماتك الشخصية لأي طرف ثالث باستثناء:</p>
            <ul className="list-disc pr-6 mb-4">
              <li>عند الضرورة للامتثال للقوانين أو للسلطات الحكومية أو الجهات التنظيمية.</li>
              <li>لحماية حقوقنا أو ممتلكاتنا.</li>
              <li>عند الاستعانة بمقدمي خدمات لإجراء مهام داخلية مثل معالجة الحسابات أو تحسين الخدمة.</li>
            </ul>
            <p className="mb-4">جميع الأطراف الثالثة ملزمة بحماية معلوماتك بنفس الطريقة التي نحميها بها نحن.</p>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>ملفات تعريف الارتباط (Cookies)</h2>
            <p className="mb-4">نستخدم ملفات تعريف الارتباط لتأمين أنشطتك على الموقع وتحسين أدائه.<br/>لا تحتوي هذه الملفات على معلومات شخصية أو بيانات حسابات.</p>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 7l9 6 9-6"/></svg>الاتصالات</h2>
            <p className="mb-4">أي مراسلات ترسلها لنا (بريد إلكتروني، نماذج، اقتراحات) ستعتبر غير سرية وغير مملوكة.<br/>نحتفظ بالحق في استخدامها لأي غرض، بما في ذلك تطوير وتحسين منتجاتنا وخدماتنا.</p>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>إخلاء المسؤولية</h2>
            <p className="mb-4">نحن غير مسؤولين عن سياسات الخصوصية أو محتوى المواقع التي نرتبط بها خارجيًا. ننصحك بمراجعة سياسة الخصوصية الخاصة بكل موقع تزوره عبر روابطنا.</p>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="8" y1="8" x2="16" y2="16"/><line x1="16" y1="8" x2="8" y2="16"/></svg>الحق في رفض مشاركة المعلومات</h2>
            <p className="mb-4">يمكنك اختيار عدم السماح لنا بمشاركة معلوماتك الشخصية مع أطراف ثالثة غير تابعة من خلال التواصل مع فريق خدمة العملاء.</p>
            <p className="mb-4 flex items-center gap-2 text-lg"><a href="https://wa.me/+966563793970" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--primary-color)] hover:underline"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.646.86 5.12 2.49 7.22L4 29l7.02-2.44A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.13 0-4.21-.62-5.97-1.8l-.43-.27-4.17 1.45 1.44-4.06-.28-.44A10.93 10.93 0 015.083 15c0-6.032 4.885-10.917 10.917-10.917S26.917 8.968 26.917 15 22.032 25.917 16 25.917zm5.29-7.13c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/></svg>تواصل معنا عبر الواتساب: <span dir="ltr">+966 56 379 3970</span></a></p>
          </div>
        </section>
      </div>
    </Layout>
  );
} 
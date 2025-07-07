'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

// دالة للحصول على رمز الهاتف بناءً على كود الدولة
function getPhoneCode(countryCode) {
  const codes = {
    AE: '971', SA: '966', EG: '20', KW: '965', QA: '974', OM: '968', BH: '973', JO: '962', IQ: '964', MA: '212', DZ: '213', TN: '216', LY: '218', SD: '249', YE: '967', SY: '963', LB: '961', PS: '970', MR: '222', SO: '252', DJ: '253', KM: '269', EH: '212', // عربية
    US: '1', GB: '44', FR: '33', DE: '49', IT: '39', ES: '34', TR: '90', IN: '91', PK: '92', // شائعة
    // أضف رموز أخرى حسب الحاجة
  };
  return codes[countryCode] || '';
}

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    whatsapp: '',
    country: ''
  });
  const [countryCode, setCountryCode] = useState('');

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // تحديد الدولة تلقائياً عند تحميل الصفحة
    const fetchCountryData = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.country_name) {
          const location = [data.country_name, data.region, data.city].filter(Boolean).join(', ');
          setFormData(prev => ({
            ...prev,
            country: location
            
          }));
          console.log('Country:', data.country_name);
        }
        if (data.country_code) {
          setCountryCode(data.country_code);
        }
      } catch (error) {
        console.error('خطأ في الحصول على معلومات الدولة:', error);
        setFormData(prev => ({
          ...prev,
          country: 'غير معروف'
        }));
        setCountryCode('');
      }
    };
    fetchCountryData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }
    
    if (!formData.age.trim()) {
      newErrors.age = 'العمر مطلوب';
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
      newErrors.age = 'يرجى إدخال عمر صحيح';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح';
    }
    
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'رقم الواتساب مطلوب';
    } else if (!/^\+?[0-9\s-]{8,}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'رقم الواتساب غير صالح';
    }
    
    if (!formData.country.trim()) {
      newErrors.country = 'الدولة مطلوبة';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const whatsappRedirect = () => {
    alert(" شكراً، تم استلام بياناتك وسنتواصل معك قريباً...");
    window.location.href = "https://wa.me/966563793970?text=مرحباً،%20أنا%20مهتم%20بالخدمة%20وأريد%20معرفة%20التفاصيل";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // تحويل بيانات النموذج إلى باراميترات GET
        const params = new URLSearchParams(formData).toString();
        const response = await fetch(`https://script.google.com/macros/s/AKfycbwPqwG2bCrHay7_8n5LzruH28wp9tyTy92q66fiUT-kGhPeta5rUjcvtS7ufzodvV4flw/exec?${params}`, {
          method: "GET"
        });
        
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            name: '',
            age: '',
            email: '',
            whatsapp: '',
            country: ''
          });
          whatsappRedirect();
          return;
        } else {
          throw new Error('فشل في إرسال البيانات');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('حدث خطأ أثناء إرسال النموذج، يرجى المحاولة مرة أخرى');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-xl border border-gray-100 text-white backdrop-blur-sm bg-white/5 shadow-xl overflow-hidden w-full max-w-7xl">
          <div className="p-10">

            
            {isSubmitted ? (
              <div className="text-[var(--secondary-color)] p-6 mb-6">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-xl">تم إرسال النموذج بنجاح!</p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-lg text-green-600 hover:text-green-800 font-medium"
                >
                  إرسال نموذج آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold  mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full px-5 py-3 text-lg rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105`}
                      placeholder="أدخل اسمك الكامل"
                    />
                    {errors.name && <p className="mt-2 text-base text-red-600">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="age" className="block text-lg font-semibold  mb-2">
                      العمر
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`block w-full px-5 py-3 text-lg rounded-lg border ${errors.age ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105`}
                      placeholder="أدخل عمرك"
                    />
                    {errors.age && <p className="mt-2 text-base text-red-600">{errors.age}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold  mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full px-5 py-3 text-lg rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105`}
                      placeholder="example@domain.com"
                    />
                    {errors.email && <p className="mt-2 text-base text-red-600">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-lg font-semibold  mb-2">
                      رقم الواتساب
                    </label>
                    <div className="flex">
                      
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className={`block w-full px-5 py-3 text-lg rounded-r-lg border-t border-b border-r ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105`}
                        placeholder="50 123 4567"
                      />
                      <span className="flex items-center px-3 bg-gray-100 border border-gray-300 rounded-l-lg text-gray-700 select-none">
                        {countryCode ? `+${getPhoneCode(countryCode)}` : '+___'}
                      </span>
                    </div>
                    {errors.whatsapp && <p className="mt-2 text-base text-red-600">{errors.whatsapp}</p>}
                  </div>

                </div>
                
                  <input
                    type="hidden"
                    id="country"
                    name="country"
                    value={formData.country}
                    readOnly
                  />
                
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white py-4 px-6 rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري الإرسال...
                    </span>
                  ) : (
                    'إرسال النموذج'
                  )}
                </button>
              </form>
            )}
            
            <div className="mt-8 text-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors">
                ← العودة للصفحة الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
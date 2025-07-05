'use client';

/**
 * خدمة للحصول على معلومات الدولة من عنوان IP
 */
export async function getCountryFromIP() {
  try {
    // استخدام API مجاني للحصول على معلومات الدولة من عنوان IP
    const response = await fetch('https://ipapi.co/json/');
    
    if (!response.ok) {
      throw new Error('فشل في الحصول على معلومات الدولة');
    }
    
    const data = await response.json();
    
    return {
      country: data.country_name,
      countryCode: data.country_code,
      city: data.city,
      region: data.region,
      success: true
    };
  } catch (error) {
    console.error('خطأ في الحصول على معلومات الدولة:', error);
    
    // إرجاع قيمة افتراضية في حالة الفشل
    return {
      country: '',
      countryCode: '',
      city: '',
      region: '',
      success: false
    };
  }
}
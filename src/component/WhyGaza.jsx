import React from 'react'
import gaza from "../assets/GazaFamine-GettyImages-2015395945.webp"
function WhyGaza() {
  return (
    <div className='mt-20'> <div className=" flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12 rounded-lg shadow-lg">
    
    {/* Image Section */}
    <div className="md:w-1/2">
      <img 
        src={gaza} 
        alt="Placeholder Image" 
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>
    {/* Arabic Text Section */}
    <div className="text-right md:w-1/2 mb-4 md:mb-0">
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-orange-700">
        ماذا يحدث في غزة
      </h2>
      <p className="text-gray-600 leading-relaxed text-xl">
      أهل غزة يعانون من حصار طويل الأمد يفرض قيودًا شديدة على حركة البضائع والأشخاص، مما أدى إلى نقص حاد في المواد الغذائية والوقود والأدوية. هذا الحصار يعيق وصول الإمدادات الأساسية، ما يؤدي إلى ارتفاع كبير في الأسعار وتجويع العديد من العائلات التي تعتمد على المساعدات الإنسانية للبقاء. 

بالإضافة إلى ذلك، القصف المستمر أسفر عن مئات القتلى، بما في ذلك العديد من النساء والأطفال، وترك الآلاف من العائلات دون مأوى. نقص الكهرباء والماء يجعل الحياة اليومية أكثر صعوبة، خاصة مع استمرار الحصار وعدم توفر المواد الضرورية للحياة.
      </p>
    </div>
  </div></div>
  

)

}

export default WhyGaza
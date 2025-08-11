export default function EndEtape() {
  return (
<div className="container mx-auto p-6 space-y-10" dir="rtl">
      
      {/* عنوان القسم */}
      <section className="bg-white shadow-lg rounded-lg p-6  ">
        <h1 className="text-3xl font-bold mb-4 text-right text-gray-900">
          متى يتم نقل خلايا الدم الحمراء؟
        </h1>
        <p className="text-lg mb-4">
          تُستخدم عمليات نقل خلايا الدم الحمراء في العديد من الحالات الطبية المهمة، ومن أبرزها:
        </p>
        <ul className="list-disc list-inside space-y-4 text-right">
          <li>
            <strong>فقر الدم الحاد:</strong> عند انخفاض نسبة الهيموغلوبين بشكل كبير، يتم نقل الدم لتحسين قدرة الجسم على نقل الأكسجين.
          </li>
          <li>
            <strong>العمليات الجراحية الكبرى:</strong> لتعويض فقدان الدم أثناء العمليات الجراحية.
          </li>
          <li>
            <strong>الإصابات والحوادث الخطيرة:</strong> مثل النزيف الناتج عن الحوادث والذي يتطلب تعويض الدم المفقود.
          </li>
          <li>
            <strong>أمراض الدم:</strong> مثل فقر الدم المنجلي والثلاسيميا، والتي تتطلب نقل دم دوري للحفاظ على مستويات طبيعية.
          </li>
          <li>
            <strong>السرطان والعلاجات:</strong> بعض أنواع السرطان أو العلاجات كالعلاج الكيميائي قد تسبب فقر دم حاد.
          </li>
          <li>
            <strong>الأمراض المزمنة:</strong> مثل الفشل الكلوي المزمن الذي يؤدي إلى فقر دم مزمن يتطلب نقل دم بشكل منتظم.
          </li>
        </ul>
      </section>

      {/* تعليمات التبرع بالدم */}
       <div className="container mx-auto p-6 space-y-10" dir="rtl">

      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800">تعليمات واضحة لعملية التبرع بالدم</h1>
      </div>

      {/* Contenu principal */}
      <section className="bg-white shadow-lg rounded-xl p-6 space-y-6 text-gray-900">
        <ul className="space-y-4 text-lg leading-loose">
          <li>
            <strong>الأهلية للتبرع:</strong> يجب أن يكون المتبرع بصحة جيدة ولا يعاني من أمراض معدية، كما يجب أن يكون في الفئة العمرية المسموح بها.
          </li>
          <li>
            <strong>التحضير قبل التبرع:</strong> تناول وجبة خفيفة ومغذية، وشرب كمية كافية من السوائل للحفاظ على الترطيب.
          </li>
          <li>
            <strong>التسجيل والتقييم:</strong> تعبئة المعلومات الشخصية والطبية، ثم إجراء تقييم للتأكد من سلامة التبرع.
          </li>
          <li>
            <strong>الفحص قبل التبرع:</strong> قياس ضغط الدم ومستوى الهيموغلوبين ودرجة الحرارة.
          </li>
          <li>
            <strong>عملية التبرع:</strong> سحب كمية صغيرة من الدم من وريد في الذراع وتستغرق بضع دقائق.
          </li>
          <li>
            <strong>الراحة بعد التبرع:</strong> أخذ قسط من الراحة وتناول وجبة خفيفة، وتجنب الأنشطة المجهدة لفترة قصيرة.
          </li>
          <li>
            <strong>التعليمات بعد التبرع:</strong> تجنب التدخين أو شرب الكحول لساعات بعد التبرع، والإبلاغ عن أي أعراض غير طبيعية.
          </li>
        </ul>
      </section>

      {/* Numéro au centre en bas */}
      <div className="flex justify-center mt-10">
        <span className="text-4xl font-bold text-green-700">٧</span>
      </div>
    </div>
    </div>
  );
}

import Image from "next/image";

export default function BodySection() {
  return (
    <div className="space-y-16" dir="rtl">
      {/* ====== أنواع التبرع ====== */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold mb-2">أنواع التبرع</h1>
        </div>

        {/* تبرع بالدم */}
        <div className="bg-white shadow rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/goutte_sang.png"
                  alt="قطرة دم"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold">التبرع بالدم</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-11 h-11">
                <Image
                  src="/time.png"
                  alt="وقت"
                  fill
                  sizes="45px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg">10 دقائق</span>
            </div>
          </div>
          <p className="text-gray-700 mb-8">
            التبرع بالدم يسمح بأخذ جميع مكونات الدم في نفس الوقت وفي غضون 10 دقائق فقط.
            وهو يلبي الاحتياجات الأكثر شيوعًا في عمليات نقل الدم، سواء كانت منتظمة
            مثل مرضى السرطان، أو طارئة مثل حالات النزيف أثناء الولادة...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <article>
              <div className="p-6 bg-gray-50 rounded-md">
                <h2 className="text-xl font-semibold mb-2">لماذا نتبرع بالدم؟</h2>
                <hr className="mb-4" />
                <p className="text-gray-700">
                  لأنه حتى يومنا هذا، لا يوجد أي دواء يمكنه أن يحل محل الدم البشري أو
                  مكوناته. لذلك يبقى الدم منتجًا لا يمكن الاستغناء عنه.
                  يوميًا، يحتاج مئات المرضى والمصابين إلى نقل الدم من أجل البقاء
                  على قيد الحياة والتعافي، ولهذا نحن بحاجة إلى كرمكم وتبرعاتكم
                  المستمرة!
                </p>
              </div>
            </article>
            <article className="flex justify-center">
              <div className="w-full max-w-md rounded overflow-hidden">
                <Image
                  src="/sacher_sang.jpg"
                  alt="كيس دم"
                  width={600}
                  height={400}
                  className="rounded-md object-cover"
                />
              </div>
            </article>
          </div>
        </div>

        {/* تبرع بالبلازما */}
        <div className="bg-white shadow rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/goutte_plasma.png"
                  alt="قطرة بلازما"
                  fill
                  sizes="50px"
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold">التبرع بالبلازما</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-11 h-11">
                <Image
                  src="/time.png"
                  alt="وقت"
                  fill
                  sizes="45px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg">45 دقيقة</span>
            </div>
          </div>
          <p className="text-gray-700 mb-8">
            يستغرق التبرع بالبلازما في المتوسط 45 دقيقة. تُستخدم البلازما بشكل
            أساسي لعلاج أكثر من 800 ألف مريض سنويًا في الجزائر، بفضل الأدوية
            المشتقة من البلازما: مرضى الهيموفيليا، وذوي المناعة الضعيفة،
            والأشخاص المصابين بأمراض مزمنة وخطيرة...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <article className="flex justify-center">
              <div className="w-full max-w-md rounded overflow-hidden">
                <Image
                  src="/sacher_plaquette.jpg"
                  alt="كيس بلازما"
                  width={600}
                  height={400}
                  className="rounded-md object-cover"
                />
              </div>
            </article>
            <article>
              <div className="p-6 bg-gray-50 rounded-md">
                <h2 className="text-xl font-semibold mb-2">لماذا نتبرع بالبلازما؟</h2>
                <hr className="mb-4" />
                <h5 className="font-medium mb-2">
                  التبرع بالبلازما ضروري لعدة أسباب طبية، أهمها:
                </h5>
                <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
                  <li>
                    علاج نقص المناعة: تحتوي البلازما على الأجسام المضادة التي
                    تقوي الجهاز المناعي وتساعد الأشخاص المصابين بنقص المناعة على
                    مقاومة العدوى.
                  </li>
                  <li>
                    دعم العمليات الجراحية: البلازما ضرورية لتعويض فقدان الدم
                    الكبير والحفاظ على توازن السوائل أثناء العمليات الجراحية
                    الكبرى.
                  </li>
                </ul>
                <p className="text-gray-700">
                  التبرع بالبلازما من قبل المتبرعين المتطوعين أمر حيوي لتلبية
                  الطلب المستمر على هذه المكونات، مما يساعد على علاج مجموعة
                  واسعة من الحالات الطبية وتحسين صحة المرضى.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* تبرع بالصفائح الدموية */}
        <div className="bg-white shadow rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/goutte_plaquette.png"
                  alt="قطرة صفائح"
                  fill
                  sizes="50px"
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold">التبرع بالصفائح الدموية</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-11 h-11">
                <Image
                  src="/time.png"
                  alt="وقت"
                  fill
                  sizes="45px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg">90 دقيقة</span>
            </div>
          </div>
          <p className="text-gray-700 mb-8">
            يستغرق التبرع بالصفائح الدموية في المتوسط 90 دقيقة.
            الصفائح تحفظ لمدة 7 أيام فقط، وتُستخدم غالبًا لعلاج أمراض الدم
            وإنقاذ حياة المرضى الذين يعانون من نزيف حاد ومفاجئ.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <article>
              <div className="p-6 bg-gray-50 rounded-md">
                <h2 className="text-xl font-semibold mb-2">لماذا نتبرع بالصفائح الدموية؟</h2>
                <hr className="mb-4" />
                <p className="text-gray-700">
                  التبرع بالصفائح الدموية ضروري لعدة أسباب طبية، منها ضمان تجلط
                  الدم، علاج اضطرابات التخثر، مساعدة مرضى السرطان أو من يخضعون
                  لعلاجات قوية، منع النزيف المفرط أثناء العمليات أو الإصابات،
                  وعلاج بعض أمراض الدم. يلعب المتبرعون بالصفائح دورًا أساسيًا في
                  توفير هذا المكون الحيوي، مما يساهم في إنقاذ الأرواح وعلاج
                  العديد من الحالات.
                </p>
              </div>
            </article>
            <article className="flex justify-center">
              <div className="w-full max-w-md rounded overflow-hidden">
                <Image
                  src="/sacher_plaquettee.jpg"
                  alt="كيس صفائح دموية"
                  width={600}
                  height={400}
                  className="rounded-md object-cover"
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

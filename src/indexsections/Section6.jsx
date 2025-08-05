// components/Section6.tsx
import Image from "next/image";

export default function Section6() {
  return (
    <div dir="rtl">
      <div className="p-3 rounded">
        <h3 id="titre" className="text-center text-xl font-semibold">
          قد نحتاج جميعًا إليه يومًا ما!
        </h3>
      </div>

      <section className="container mx-auto pt-5">
        <main className="flex flex-col md:flex-row p-3 gap-6">

          <article className="flex-1 text-center">
            <div className="p-4 text-gray-900 rounded ">
              <h4 id="titre" className="text-lg font-semibold mb-3">
                "متحدون من أجل الحياة: معًا من أجل التبرع بالدم"
              </h4>
              <p className="text-sm leading-relaxed">
                معًا نشكل قوة هائلة من الخير، نوحد جهودنا للتبرع بالدم لنصبح
                صُنّاع لمستقبل مشرق. كل قطرة دم نقدمها تصبح مصدرًا للأمل،
                قادرة على استعادة الصحة وبعث حياة جديدة. فعلنا هذا من الكرم
                يؤلف لحنًا من الوحدة، حيث يلعب كل مشارك دورًا حيويًا في سمفونية
                التضامن. انضم إلى هذه القضية النبيلة، حيث يخلق تعاوننا شبكة دعم
                تتجاوز الحدود، موحدين قلوبنا لنمنح بصيص أمل لأولئك الذين هم في
                أمس الحاجة. 
                <br /><br />
                معًا، لنتبرع، ولنشارك الحب، ولنصبح الأبطال المجهولين الذين يغيرون
                المصير. إن اتحادنا في التبرع بالدم يمثل قوة لا تقاوم، ووعدًا بالأمل
                والتجدد لمجتمعنا، ورسالة إنسانية صادقة تعبر عن قيم العطاء والتكافل.
                <br /><br />
                لنتذكر دائمًا أن تبرعك اليوم قد ينقذ حياة طفل صغير، أو يعيد
                الابتسامة إلى وجه أم، أو يمنح فرصة جديدة لمريض ينتظر الأمل. كل تبرع
                هو هدية لا تقدر بثمن، وعمل نبيل يبقى أثره خالدًا في القلوب.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                
                <div className="relative h-10 w-10 flex-shrink-0">
                  <Image
                    src="/flesh.png"
                    alt="سهم"
                    fill
                    sizes="20px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <a
                  href="#"
                  className="text-red-600 font-medium underline"
                >
                  التبرع الآن
                </a>
                
              </div>
            </div>
          </article>

          <article className="flex-1">
            <div className="relative w-full h-[300px] md:h-[400px] rounded overflow-hidden">
              <Image
                src="/bg3.avif"
                alt="أصدقاء"
                fill
                style={{ objectFit: "cover" }}
                className="rounded"
                priority
              />
            </div>
          </article>

        </main>
      </section>
    </div>
  );
}

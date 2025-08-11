// components/Section2Arabic.tsx
import Image from "next/image";
import Link from "next/link";

export default function Section2Arabic() {
  return (
    <section dir="rtl" className="w-full px-6 py-10 text-center">
      <div className="relative mb-8">
        <h3 id="titre" className="text-2xl font-semibold mb-3">
          التبرع بالدم
        </h3>
        <p className="max-w-2xl mx-auto text-base leading-relaxed">
          التبرع بالدم هو عمل غير أناني ينقذ الأرواح، يدعم العلاجات الطبية،
          يعزز الاستعداد لحالات الطوارئ ويساهم في الأبحاث الطبية. إنه وسيلة
          عملية للأفراد لإحداث فرق إيجابي في حياة الآخرين وتعزيز صحة المجتمع.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {/* من يمكنه التبرع */}
        <div className="relative flex flex-col items-center  p-6 ">
          <div className="relative h-32 w-32 mb-3">
            <Image
              src="/don5.png"
              alt="من يمكنه التبرع"
              fill
              sizes="128px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <h5 className="font-bold text-lg mb-2">من يمكنه التبرع؟</h5>
          <h6 className="font-normal text-sm mb-4">
            كل يوم، يتبرع 10,000 شخص بالدم أو البلازما أو الصفائح الدموية،
            فلماذا لا تكون أنت؟ لا تتردد وانضم إلينا!
          </h6>
          <h5 className="pt-2 font-bold">
            <span>
              <Link href="/qui_peut_donne" className="inline-flex items-center gap-2">
                
                <div className="relative h-10 w-10">
                  <Image
                  className="pt-2"
                    src="/flesh.png"
                    alt="سهم"
                    fill
                    sizes="20px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className="text-red-600">مزيد من المعلومات</span>
                
              </Link>
            </span>
          </h5>
        </div>

        {/* كيف يتم التبرع */}
        <div className="relative flex flex-col items-center p-6 ">
          <div className="relative h-32 w-32 mb-3">
            <Image
              src="/don6.svg"
              alt="كيف يتم التبرع"
              fill
              sizes="128px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <h5 className="font-bold text-lg mb-2">
            كيف يتم التبرع بالدم؟
          </h5>
          <h6 className="font-normal text-sm mb-4">
            هل ترغب في التبرع بالدم ولكن تتساءل كيف يتم ذلك؟
          </h6>
          <h5 className="pt-2 font-bold">
            <span  >
              <Link href="/etapes_don_sang" className="inline-flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <Image
                    className="pt-2 w-2xl"
                    src="/flesh.png"
                    alt="سهم"
                    fill
                    sizes="20px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className="text-red-600">مراحل التبرع</span>

              </Link>
            </span>
          </h5>
        </div>

        {/* الفترة بين التبرعين */}
        <div className="relative flex flex-col items-center  p-6  md:col-span-2">
          <div className="relative h-32 w-32 mb-3">
            <Image
              src="/don7.svg"
              alt="الفترة بين التبرعين"
              fill
              sizes="128px"
              priority
            />
          </div>
          <h5 className="font-bold text-lg mb-2">
            الفترة بين تبرعين؟
          </h5>
          <h6 className="font-normal text-sm mb-4">
            تختلف المدة المطلوبة بين تبرعين حسب نوع التبرع الذي تنوي القيام به.
          </h6>
          <h5 className="pt-2 font-bold">
            <span  >
              <Link href="/delai_entre_deux_dons" className="inline-flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <Image
                  className="pt-2 "
                    src="/flesh.png"
                    alt="سهم"
                    fill
                    sizes="20px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className="text-red-600">مزيد من المعلومات</span>
                
              </Link>
            </span>
          </h5>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SecondEtape() {
  return (
    <div dir="rtl" className="space-y-8 p-5">
      {/* Bloc 1 */}
      <div className="container mx-auto bg-white p-6 rounded shadow text-gray-900">
        <h1 className="text-2xl font-bold mb-4">لماذا التبرع بالدم؟</h1>
        <p className="leading-relaxed">
          نظرًا لعدم وجود أدوية قادرة على استنساخ خصائص الدم البشري أو مكوناته،
          يظل الدم عنصرًا لا يمكن الاستغناء عنه. كل يوم، يعتمد العديد من المرضى وضحايا
          الحوادث على عمليات نقل الدم من أجل بقائهم وتعافيهم. لهذا السبب،
          نطلب منكم التبرع بانتظام، لأن مساهمتكم اليومية ضرورية في هذا العمل الحيوي.
        </p>
      </div>

      {/* Bloc 2 : texte + image */}
      <div className="container mx-auto bg-white p-6 rounded shadow flex flex-col lg:flex-row items-center gap-8">
        {/* Texte */}
        <article className="flex-1">
          <h1 className="text-2xl font-bold mb-4">ما فائدة التبرع بالدم؟</h1>
          <p className="leading-relaxed mb-3">
            بمجرد جمع الدم من المتبرع، يتم فصل مكوناته (كريات الدم الحمراء،
            البلازما والصفائح الدموية)، ثم يتم معالجتها وتجهيزها لنقلها إلى
            المستشفيات حسب الحاجة.
          </p>
          <p className="leading-relaxed mb-3">
            إن التزامك بالتبرع المنتظم يمكن أن يحدث فرقًا حقيقيًا، فكل تبرع
            له قيمة، والفترة الزمنية القصيرة بين التبرعين يمكن أن تسهم
            بشكل كبير في إنقاذ الأرواح.
          </p>
          <p className="mt-4">
            <Link
              href="/delai_entre_deux_dons"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              الفاصل الزمني بين التبرعين
            </Link>
          </p>
        </article>

        {/* Image */}
        <article className="flex-1">
          <img
            src="/bg12.jpg"
            alt="التبرع بالدم"
            className="rounded w-full object-cover"
          />
        </article>
      </div>
    </div>
  );
}

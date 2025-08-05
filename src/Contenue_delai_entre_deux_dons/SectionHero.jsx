// src/Contenue_delai_entre_deux_dons/SectionHero.jsx
"use client";

import { useState } from "react";
import Question from "@/Question";
import Image from "next/image";

export default function SectionHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="max-w-7xl mx-auto pt-16 px-6" dir="rtl">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Texte */}
        <div className="flex-1">
          <div className="p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">
              الفترة بين تبرعين
            </h1>
            <p className="mb-5 leading-relaxed text-gray-800">
              بالنسبة للتبرع بالدم الكامل، تفرض القوانين فترة انتظار لا تقل عن
              شهرين بين كل تبرع، على الرغم من أن الصليب الأحمر يوصي بفترة انتظار
              مدتها 3 أشهر. في كلا الحالتين، الحد الأقصى لتكرار التبرع المسموح به
              هو 4 تبرعات خلال فترة 365 يومًا.
            </p>

            <p className="mb-5 leading-relaxed text-gray-800">
              أما بالنسبة للتبرع بالبلازما، فيُمكن القيام به كل أسبوعين، مما يتيح
              حجمًا أقصى يصل إلى 15 لترًا من البلازما في السنة.
            </p>

            <p className="mb-5 leading-relaxed text-gray-800">
              بالنسبة لتبرعات الصفائح الدموية، يوصي الصليب الأحمر بفترة انتظار
              قدرها شهر بين كل تبرع، مع إمكانية استثناء لفترة أسبوعين في ظروف خاصة.
              العدد الأقصى لتبرعات الصفائح الدموية، بما في ذلك تبرعات الدم المحتملة،
              محدد بـ 24 مرة في السنة (365 يومًا).
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 p-3 flex justify-center">
          <div className="relative w-full max-w-sm h-[450px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
            {!imgError ? (
              <Image
                src="/delai-don.jpeg"
                alt="الفترة بين التبرعات"
                width={450}
                height={450}
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 450px"
                priority
                onError={(e) => {
                  console.warn("Erreur de chargement de l'image:", e);
                  setImgError(true);
                }}
                unoptimized
                aria-label="صورة توضيحية عن الفترة بين التبرعات"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full px-4">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="mb-2"
                >
                  <path
                    fill="currentColor"
                    d="M21 5v14H3V5h18m0-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                  />
                  <text
                    x="12"
                    y="54"
                    fontSize="8"
                    textAnchor="middle"
                    fill="currentColor"
                  >
                    صورة مفقودة
                  </text>
                </svg>
                <span
                  className="text-center text-sm text-red-600"
                  role="alert"
                  aria-label="الصورة غير متوفرة"
                >
                  الصورة غير متوفرة
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FAQ / Questions */}
      <div className="mt-12">
        <Question />
      </div>
    </section>
  );
}

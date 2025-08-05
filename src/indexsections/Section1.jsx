import Image from 'next/image';

export default function Section1() {
  return (

    <section className="container mx-auto bg-white relative md:pt-0">
      <div className="px-6 mx-auto sm:px-6 pt-16 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center  lg:gap-x-20">

             {/* Image à gauche sur desktop */}
          <div className="order-1 lg:order-none text-center">
            <Image
              src="/sang.jpg"
              alt="تبرع بالدم"
              width={500}
              height={500}
              className="w-full border-amber-50  mx-auto rounded-lg"
            />
          </div>


              {/* Texte à droite */}
          <div className="text-center  md:pt-0 lg:text-right">
            <h2 className="text-3xl font-bold text-red-700 sm:text-4xl lg:text-5xl leading-tight">
              أنقذ حياة بالتبرع بالدم
            </h2>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              التبرع بالدم هو عمل إنساني نبيل يمكن أن يُنقذ أرواحًا لا تُعد. بقطرات قليلة، يمكنك أن تكون الأمل لمرضى في أمسّ الحاجة.
            </p>
            <p className="mt-4 text-gray-700 font-semibold text-lg">
                ! انضم إلينا اليوم وكن البطل الذي يُحدث فرقاً 
            </p>

            {/* Boutons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-end gap-4">
              <a
                href="#"
                className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
              >
                متبرع بالدم
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition duration-200"
              >
                تبحث عن متبرع
              </a>
            </div>

            {/* Lien & Compteur */}
            <div className="mt-6 text-center lg:text-right">
              <a href="#" className="text-red-600 underline text-sm font-medium block mb-2">
                اقرأ عن شروط وفوائد التبرع بالدم
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

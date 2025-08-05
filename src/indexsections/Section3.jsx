// components/Section3.tsx
import Image from "next/image";

export default function Section3() {
  return (
    <section className="w-full px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Image principale */}
        <article className="flex-1">
          <div className="relative h-[440px] w-full rounded-md overflow-hidden">
            <Image
              src="/PersonneDonnerdusang.jpg"
              alt="Personne donnant du sang"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </article>

        {/* Texte et baromètre */}
        <article className="flex-1 p-6 flex flex-col justify-center">
          <div className="text-gray-900 rounded-md">

                <div className="text-center">
                    <h2
                    id="titre"
                    className="text-2xl font-semibold text-center mb-4 relative"
                    style={{ top: "-10px" }}
                    >
                    مؤشر فصائل الدم
                    </h2>
                    <p className="mb-2">
                    نعتمد على تبرعك القادم للمساعدة في الحفاظ على المخزون
                    </p>
                    <p className="mb-6">
                    قطرة دمك يمكن أن تُحدث فرقًا كبيرًا، ونحن نُقدّر مشاركتك المستمرة في جهودنا المشتركة لدعم احتياجات الدم.
                    </p>
                </div>


            <div className="border border-gray-200 rounded-md p-4">
              {/* Rangée 1 */}
              <div className="flex flex-wrap justify-around gap-6 mb-4">
                {["O+", "A+", "B+", "AB+"].map((group) => (
                  <div key={group} className="flex flex-col items-center">
                    <div className="relative h-10 w-10">
                      <Image
                        src="/blood.png"
                        alt={`Icône groupe sanguin ${group}`}
                        fill
                        sizes="64px"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <h5 className="text-center mt-2 font-medium">{group}</h5>
                  </div>
                ))}
              </div>

              {/* Rangée 2 */}
              <div className="flex flex-wrap justify-around gap-6">
                {["O-", "A-", "B-", "AB-"].map((group) => (
                  <div key={group} className="flex flex-col items-center">
                    <div className="relative h-10 w-10">
                      <Image
                        src="/blood.png"
                        alt={`Icône groupe sanguin ${group}`}
                        fill
                        sizes="64px"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <h5 className="text-center mt-2 font-medium">{group}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

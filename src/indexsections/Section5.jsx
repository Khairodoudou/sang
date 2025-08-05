// components/Section5Arabic.tsx
import Image from "next/image";
import Link from "next/link";

export default function Section5Arabic() {
  return (
    <section dir="rtl" className="w-full px-6 py-10 text-center">
      <div className="relative mb-8">
        <h3 id="titre" className="text-2xl font-semibold mb-3">
          لماذا التبرع بالدم؟
        </h3>
        <p className="max-w-2xl mx-auto text-base leading-relaxed">
          يُغير التبرع بالدم حياة مليون مريض كل عام في الجزائر. أليس ذلك
          يستحق العناء؟
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-4 max-w-7xl mx-auto">
        {/* 3 حيوات */}
        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <div className="relative h-24 w-24 mb-3">
            <Image
              src="/don1.svg"
              alt="3 حيوات"
              fill
              sizes="96px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <h5 className="font-bold text-lg mb-2">3 حيوات</h5>
          <h6 className="font-normal text-sm">
            لأنك في 30 دقيقة يمكنك إنقاذ 3 حيوات!
          </h6>
        </div>

        {/* 500 000 كيس */}
        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <div className="relative h-24 w-24 mb-3">
            <Image
              src="/don2.svg"
              alt="500000 كيس"
              fill
              sizes="96px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <h5 className="font-bold text-lg mb-2">500٬000 كيس</h5>
          <h6 className="font-normal text-sm">
            لأن الجزائر تحتاج إلى ما يقرب من 500٬000 كيس سنويًا لتلبية
            الاحتياجات.
          </h6>
        </div>

        {/* شخص من كل 7 */}
        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <div className="relative h-24 w-24 mb-3">
            <Image
              src="/don3.svg"
              alt="شخص من كل 7"
              fill
              sizes="96px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <h5 className="font-bold text-lg mb-2">شخص من كل 7</h5>
          <h6 className="font-normal text-sm">
            لأن أقل من شخص من كل 10 يتبرع بالدم بينما سيحتاج شخص من كل 7 إليه
            يومًا ما.
          </h6>
        </div>

        {/* حيوي */}
        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <div className="relative h-24 w-24 mb-3">
            <Image
              src="/don4.svg"
              alt="حيوي"
              fill
              sizes="96px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <h5 className="font-bold text-lg mb-2">حيوي</h5>
          <h6 className="font-normal text-sm">
            لأن الدم حاليًا لا يمكن الاستغناء عنه.
          </h6>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/Pourquoi_donner"
          className="inline-block px-8 py-3 bg-red-600 text-white font-medium rounded-lg shadow hover:bg-red-700 transition"
        >
          مزيد من المعلومات
        </Link>
      </div>
    </section>
  );
}

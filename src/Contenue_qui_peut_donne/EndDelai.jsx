'use client';
import { useState } from 'react';

const EndDelai = () => {
  const [current, setCurrent] = useState(1);

  const handleNext = () => {
    setCurrent((prev) => (prev < 8 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div id="contre-indication" className="text-right">
      <div className="container mx-auto p-5 text-black rounded">
        <p className='text-center font-semibold p-2'>
          هذه قائمة إرشادية لبعض موانع التبرع بالدم. هذه القائمة غير شاملة. الفحص الطبي والاستبيان الصحي هما المرجع النهائي. قد يمنعك الطبيب من التبرع لحماية صحتك أو صحة المتلقي. هذه السلامة هي أولوية لخدمة الدم.
        </p>
      </div>

      <section className="container p-5">
        <div className="text-center pb-3 flex justify-center space-x-6 rtl:space-x-reverse">
          <button onClick={handlePrevious} className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src="/Précédent.png" alt="السابق" width={30} />
            <span className="text-xl">السابق</span>
          </button>
          <button onClick={handleNext} className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-xl">التالي</span>
            <img src="/Suivant.png" alt="التالي" width={30} />
          </button>
        </div>

        <main className="grid">
          {[...Array(8)].map((_, index) => {
            const number = index + 1;
            if (current !== number) return null;

            const paragraphs = [
              {
                title: 'الحمل',
                text: 'لضمان سلامتك وسلامة الطفل، لا يمكنك التبرع أثناء الحمل أو خلال 6 أشهر بعد الولادة. بعد الإجهاض أو السقط، الانتظار أيضًا 6 أشهر. الرضاعة ليست مانعًا للتبرع.',
                image: '/grossesse.avif',
              },
              {
                title: 'الوزن',
                text: 'للتبرع بالدم أو البلازما أو الصفائح، يجب أن يكون وزنك 50 كغ على الأقل، وأعلى قليلًا إن كنت أقصر من 1.56 متر.',
                image: '/poid.jpg',
              },
              {
                title: 'كوفيد-19',
                text: 'يجب الانتظار 15 يومًا بعد انتهاء الأعراض أو بعد تاريخ الفحص إذا لم تظهر الأعراض. إذا ظهرت الأعراض دون فحص، يجب انتظار زوال الأعراض. في بعض الحالات، قد يكون الانتظار أطول.',
                image: '/covid.avif',
              },
              {
                title: 'تعاطي المخدرات عن طريق الوريد',
                text: 'يُستثنى من التبرع من استخدموا المخدرات عبر الوريد بسبب خطر انتقال الأمراض مثل فيروس HIV، والتهاب الكبد B و C.',
                image: '/Usage de drogues intraveineuses.avif',
              },
              {
                title: 'المرض',
                text: 'الزكام بدون حمى لا يمنع التبرع. مع الحمى (38° أو أكثر)، يجب الانتظار أسبوعين بعد الشفاء. بعض الأمراض تمنع التبرع نهائيًا: السرطان، الجلطة، السكري المعتمد على الأنسولين، وغيرها.',
                image: '/grippe.jpg',
              },
              {
                title: 'عادات السفر',
                text: 'قد تؤثر وجهات السفر على أهلية التبرع بسبب مخاطر الأمراض المعدية. يتم فرض قيود مؤقتة بناءً على الوجهة. يجب الإفصاح عن وجهات السفر لتقييم الأهلية.',
                image: '/Habitudes de voyage.avif',
              },
              {
                title: 'الثقوب والوشم',
                text: 'يجب الانتظار 4 أشهر بعد إجراء وشم، ثقب (بما في ذلك الأقراط)، أو مكياج دائم قبل التبرع.',
                image: '/Piercing et tatouage.jpg',
              },
              {
                title: 'اللقاحات',
                text: 'القيود تختلف حسب نوع اللقاح والمنطقة. عادة، لا تمنع اللقاحات التبرع، باستثناء تلك التي تحتوي على فيروسات حيّة. راجع التوجيهات المحلية قبل التبرع.',
                image: '/vaccin.jpg',
              },
            ];

            const { title, text, image } = paragraphs[index];

            return (
              <article key={index} className="text-center p-3">
                <div className="bg-white rounded shadow p-4 max-w-3xl mx-auto">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-md mb-3">{text}</p>
                  <img src={image} alt={title} className="mx-auto h-[400px] w-[400px] object-cover rounded" />
                </div>
              </article>
            );
          })}
        </main>
      </section>
    </div>
  );
};

export default EndDelai;

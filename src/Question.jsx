"use client";

import { useState } from "react";

const faqs = [
  {
    question: "لماذا يعتبر التبرع بالدم أمرًا مهمًا؟",
    answer: `التبرع بالدم أمر بالغ الأهمية لأنه ينقذ الأرواح. عمليات نقل الدم
      ضرورية في العديد من الحالات مثل التدخلات الجراحية، وعلاجات السرطان،
      والحوادث الخطيرة، والأمراض المزمنة. تبرعك قد يحدث الفرق بين الحياة
      والموت لشخص يحتاجه.`,
  },
  {
    question: "ما أهمية التبرع المنتظم بالدم؟",
    answer: `التبرع المنتظم ضروري للحفاظ على إمداد ثابت من الدم. فالاحتياجات
      الطبية مستمرة، والتبرعات المتكررة تضمن أن بنوك الدم يمكنها تلبية الطلبات،
      خاصة في حالات الطوارئ.`,
  },
  {
    question: "كيف يمكنني المساهمة كمتبرع بالدم؟",
    answer: `من خلال التبرع بالدم، تقدم هدية ثمينة يمكنها إنقاذ الأرواح.
      يمكنك المساهمة بالمشاركة في حملات التبرع التي تنظمها مراكز جمع الدم،
      وتشجيع الآخرين على التبرع، ونشر الوعي بأهمية التبرع بالدم.`,
  },
  {
    question: "هل هناك فوائد للمتبرع بالدم؟",
    answer: `نعم، التبرع بالدم يمكن أن يكون له فوائد صحية للمتبرع.
      فهو يحفز إنتاج خلايا دم حمراء جديدة، وقد يقلل من خطر الإصابة
      ببعض أمراض القلب والأوعية الدموية. كما أنه وسيلة للمساهمة الإيجابية
      في خدمة المجتمع.`,
  },
  {
    question: "كم يستغرق وقت عملية التبرع بالدم؟",
    answer: `تستغرق العملية من التسجيل حتى سحب الدم عادة بين 30 و45 دقيقة.
      عملية السحب نفسها لا تستغرق سوى بضع دقائق.
      بعد التبرع، يُنصح بأخذ قسط من الراحة مع تناول وجبة خفيفة.`,
  },
  {
    question: "هل يمكنني التبرع بالدم إذا لم أكن بصحة جيدة تمامًا؟",
    answer: `الصحة عامل أساسي. يجب أن يكون المتبرعون في صحة جيدة وقت التبرع.
      بعض الحالات الطبية أو العلاجات قد تؤثر على الأهلية للتبرع.
      من المهم إبلاغ الفريق الطبي بأي مشكلة صحية عند التسجيل.`,
  },
  {
    question: "كيف أستعد قبل التبرع بالدم؟",
    answer: `قبل التبرع، تأكد من شرب كمية كافية من الماء للبقاء رطبًا.
      تناول وجبة خفيفة ومغذية للحفاظ على مستوى طاقتك.
      ارتدِ ملابس مريحة ذات أكمام قصيرة لتسهيل الوصول إلى الذراع.`,
  },
  {
    question: "هل فصيلة دمي مهمة؟",
    answer: `جميع فصائل الدم مهمة. ومع ذلك، بعض الفصائل مثل O سالب
      تُعد متبرعًا عالميًا وهي ذات قيمة خاصة في حالات الطوارئ
      عندما لا تُعرف فصيلة دم المريض فورًا.`,
  },
];

function AccordionItem({ question, answer, isOpen, onToggle, id }) {
  return (
    <div className="border-b last:border-b-0">
      <button
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
      >
        <span>{question}</span>
        <span className="ml-2">
          {isOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`button-${id}`}
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-[1000px] mt-0" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-gray-700">{answer}</p>
      </div>
    </div>
  );
}

export default function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="text-gray-900 py-12" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center pb-6">
          <h2 className="text-2xl font-bold">أسئلتكم، إجاباتنا</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq, i) => (
              <AccordionItem
                key={i}
                id={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
          <div className="space-y-4">
            {faqs.slice(4).map((faq, i) => (
              <AccordionItem
                key={i + 4}
                id={i + 4}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i + 4}
                onToggle={() => toggle(i + 4)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-white pt-12" dir="rtl">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow text-gray-900 space-y-12">

        {/* --- Don de sang --- */}
        <div>
          <h3 className="text-2xl font-semibold mb-4" id="titre">
            من يمكنه التبرع بالدم؟
          </h3>
          <hr className="mb-6 border-gray-300" />
          <h6 className="text-lg font-medium mb-2">كل شخص:</h6>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>يتمتع بصحة جيدة</li>
            <li>يبلغ من العمر بين 18 و70 سنة</li>
            <li>يبلغ وزنه على الأقل 50 كغ</li>
            <li>لا يعاني من أمراض معدية يمكن أن تنتقل عبر الدم</li>
            <li>يمكنك التبرع حتى 6 مرات في السنة للرجال و4 مرات للنساء</li>
          </ul>
          <p>
            بالإضافة إلى هذه الشروط الأساسية، توجد مجموعة من{" "}
            <b>
              <a href="#contre-indication" className="text-red-600 hover:underline">
                الموانع الطبية
              </a>
            </b>{" "}
            التي قد تمنعك مؤقتًا أو، في بعض الحالات، بشكل دائم من التبرع بالدم.
          </p>
        </div>

        {/* --- Don de plasma --- */}
        <div>
          <h3 className="text-2xl font-semibold mb-4" id="titre">
            من يمكنه التبرع بالبلازما؟
          </h3>
          <hr className="mb-6 border-gray-300" />
          <h6 className="text-lg font-medium mb-2">كل شخص:</h6>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>يتمتع بصحة جيدة</li>
            <li>يبلغ من العمر أكثر من 18 سنة وأقل من 66 سنة</li>
            <li>يبلغ وزنه على الأقل 50 كغ</li>
            <li>لا يعاني من أمراض معدية يمكن أن تنتقل عبر الدم</li>
            <li>
              يُستخدم التبرع بالبلازما في عمليات نقل الدم أو لصناعة الأدوية. تستغرق العملية ساعة كحد أقصى، ويمكن التبرع حتى 24 مرة في السنة.
            </li>
          </ul>
          <p>جميع فصائل الدم يمكنها التبرع بالبلازما.</p>
          <p>
            بالإضافة إلى هذه الشروط الأساسية، توجد{" "}
            <a href="#contre-indication" className="text-red-600 hover:underline">
              موانع طبية
            </a>{" "}
            قد تمنعك مؤقتًا أو، في بعض الحالات، بشكل دائم من التبرع بالبلازما.
          </p>
        </div>

        {/* --- Don de plaquettes --- */}
        <div>
          <h3 className="text-2xl font-semibold mb-4" id="titre">
            من يمكنه التبرع بالصفائح الدموية؟
          </h3>
          <hr className="mb-6 border-gray-300" />
          <h6 className="text-lg font-medium mb-2">كل شخص:</h6>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>يتمتع بصحة جيدة</li>
            <li>يبلغ من العمر 18 سنة على الأقل</li>
            <li>يبلغ وزنه على الأقل 50 كغ</li>
            <li>لا يعاني من أمراض معدية يمكن أن تنتقل عبر الدم</li>
          </ul>
          <p>يُفضل أخذ الصفائح الدموية من المتبرعين ذوي الفصائل O و A.</p>
          <p>
            تبرع واحد بالصفائح عبر الفصادة يمكن أن ينقذ حياة 1 أو 2 من البالغين، أو حتى 3 أطفال!
          </p>
          <p>
            هناك حاجة إلى 500 تبرع بالصفائح يوميًا — مساهمة حاسمة لإنقاذ الأرواح. تُستخدم الصفائح في علاج مرضى الدم أو الذين يخضعون لعلاجات مكثفة، وتُعد ضرورية لتفادي مخاطر النزيف، مما يجعلها شريان حياة حقيقي للمصابين.
          </p>
          <p>
            بالإضافة إلى هذه الشروط الأساسية، توجد{" "}
            <a href="#contre-indication" className="text-red-600 hover:underline">
              موانع طبية
            </a>{" "}
            قد تمنعك مؤقتًا أو دائمًا من التبرع بالصفائح الدموية.
          </p>
        </div>
      </div>
    </section>
  );
}

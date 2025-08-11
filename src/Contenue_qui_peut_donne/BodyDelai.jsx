export default function BodyDelai() {
  return (
    <header dir="rtl">
      {/* صورة الخلفية */}
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url('images/bg14.avif')",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-center items-center h-full">
            <div className="text-white text-center px-4">
              <hr className="border-2 rounded border-white mb-4" />
              <h3 className="text-3xl font-bold mb-3">موانع التبرع</h3>
              <h5 className="text-lg mb-2">
                السفر، الأدوية، الأمراض أو حتى الوشم من بين بعض الموانع المؤقتة
              </h5>
              <h5 className="text-lg">
                أو الدائمة للتبرع بالدم أو بالبلازما أو بالصفائح الدموية. اكتشف
                أهمها أدناه.
              </h5>
              <hr className="border-2 rounded border-white mt-4" />
            </div>
          </div>
        </div>
      </div>
      {/* نهاية صورة الخلفية */}
    </header>
  );
}

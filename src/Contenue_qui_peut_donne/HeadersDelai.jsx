export default function HeadersDelai() {
  return (
    <header dir="rtl">
      <div
        className="text-center bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: "url('/bg8.avif')" }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <div className="text-white px-4">
            <h6 className="text-lg mb-3 uppercase tracking-widest">تبرع</h6>
            <h3 className="text-3xl font-bold mb-3">التبرع بالدم</h3>
            <hr className="border-2 border-white rounded-lg mb-3" />
            <h5 className="text-lg mb-2">
              حتى يومنا هذا، لا يوجد دواء اصطناعي أو علاج قادر على تعويض الدم
            </h5>
            <h5 className="text-lg">
              البشري أو مكوناته الحيوية. الدم هو مادة لا يمكن الاستغناء عنها.
            </h5>
            <hr className="border-2 border-white rounded-lg mt-3" />
          </div>
        </div>
      </div>
    </header>
  );
}

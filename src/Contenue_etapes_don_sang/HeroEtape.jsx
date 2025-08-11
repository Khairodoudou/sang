'use client';

export default function HeroEtape() {
  return (
    <header dir="rtl">
      <div
        className="text-center bg-cover bg-center h-[450px] flex items-center justify-center"
        style={{ backgroundImage: "url('/bg10.jpg')" }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <div className="text-white text-center max-w-3xl px-4">
            <p className="text-lg mb-2">التبرع</p>
            <h1 className="text-4xl font-bold mb-4">التبرع بالدم</h1>
            <hr className="border-2 border-white rounded-lg mb-3" />
            <p className="text-lg p-2 leading-relaxed">
              في الوقت الحالي، لا يوجد أي دواء أو علاج صناعي قادر على تعويض الدم
              البشري أو مكوناته الحيوية. لذلك، يُعتبر الدم مادة لا يمكن الاستغناء عنها.
            </p>
            <hr className="border-2  border-white rounded-lg mb-3" />
          </div>
        </div>
      </div>
    </header>
  );
}

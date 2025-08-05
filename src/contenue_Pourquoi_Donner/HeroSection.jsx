'use client';


const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full rounded-b-lg">
      <img
        src="/bg9.jpg"
        alt="Fond don de sang"
        className="absolute inset-0 w-full h-full object-cover  brightness-75"
      />

      {/* Overlay avec le contenu */}
      <div className="relative z-10 min-h-screen bg-black/50 flex items-center justify-center">
        <div className="text-white text-center max-w-3xl px-4" dir="rtl">
          <h2 className="text-3xl font-bold mb-3">               أنقذ حياة بالتبرع بالدم
          </h2>

          <hr className="border-white border-2 rounded-lg mb-4" />

          <p className="text-lg mb-3">
            دون التزام، بحرية وبشكل دوري، يغير التبرع بالدم حياة مليون شخص في الجزائر كل عام:
          </p>
          <p className="text-lg">
            امرأة تلد، شخص تعرض لحادث مرور، مريض مصاب بالسرطان.
          </p>
          <p className="text-lg font-semibold mt-3">كل تبرع منكم مهم</p>

          <hr className="border-white border-2 rounded-lg mt-4" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

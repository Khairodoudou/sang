// src/indexsections/Section4.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Section4() {
  const target = 10000;
  const duration = 2000; // durée en ms
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let rafId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2); // ease-out
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafId = window.requestAnimationFrame(step);
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="/bg1.avif"
            alt="Fond solidaire"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
            نواجه تحدي{" "}
            <span className="text-red-500">
              {count.toLocaleString()}
            </span>{" "}
            تبرعاً يومياً
          </h1>

          <div className="space-y-2 max-w-2xl">
            {[
              "استراحة تضامنية تفيدنا جميعاً",
              "ساعة لنفسك، عمل جميل لهم",
              "معاً، لنتبنى التبرع بالدم",
            ].map((line, i) => (
              <p
                key={i}
                className="flex items-center justify-center gap-3 text-base md:text-lg"
              >
                <span>{line}</span>
                <div className="relative h-6 w-6 flex-shrink-0">
                  <Image
                    src="/true.png"
                    alt="صح"
                    fill
                    sizes="24px"
                    style={{ objectFit: "contain" }}
                    className="opacity-75"
                  />
                </div>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

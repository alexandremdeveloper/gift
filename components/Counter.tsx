"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const startDate = new Date("2026-05-11");
    const now = new Date();

    const diff =
      now.getTime() - startDate.getTime();

    setDays(
      Math.floor(diff / (1000 * 60 * 60 * 24))
    );
  }, []);

  return (
    <section id="contador" className="py-32 text-center">

      <p className="uppercase tracking-[0.3em] text-sm text-zinc-500">
        Nosso Tempo
      </p>

      <h2 className="mt-6 text-4xl font-light">
        Estamos escrevendo essa história há
      </h2>

      <p className="mt-8 text-7xl font-semibold">
        {days}
      </p>

      <p className="mt-2 text-zinc-500">
        dias ❤️
      </p>

      <p className="mt-8 max-w-md mx-auto text-zinc-600">
        E cada segundo valeu a pena.
      </p>

      

    </section>
  );
}
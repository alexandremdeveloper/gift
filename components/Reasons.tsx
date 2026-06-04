"use client";

import { useState } from "react";
import { reasons } from "@/data/reasons";

export default function Reasons() {
  const [reason, setReason] = useState(reasons[0]);

  function randomReason() {
    const random =
      reasons[Math.floor(Math.random() * reasons.length)];

    setReason(random);
  }

  return (
    <section className="py-32 text-center px-6">

      <h2 className="text-4xl font-light">
        Motivos pelos quais te amo
      </h2>

      <div className="mt-10 max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-sm">

        <p className="text-xl italic">
          {reason}
        </p>

      </div>

      <button
        onClick={randomReason}
        className="mt-8 px-6 py-3 rounded-full border"
      >
        Mostrar outro ❤️
      </button>

    </section>
  );
}
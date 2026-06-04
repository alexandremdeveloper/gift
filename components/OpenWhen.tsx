"use client";

import { useState } from "react";

const letters = [
  {
    title: "Abrir quando estiver triste",
    content:
      "Quero que você saiba que dias difíceis passam. E eu continuo aqui."
  },
  {
    title: "Abrir quando sentir saudade",
    content:
      "A distância nunca será maior que o carinho que sinto por você."
  },
  {
    title: "Abrir quando precisar sorrir",
    content:
      "Lembra daquela vez que quase morremos de rir juntos?"
  }
];

export default function OpenWhen() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 px-6">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-light text-center">
          Abrir Quando...
        </h2>

        <div className="mt-16 space-y-4">

          {letters.map((letter, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6"
            >
              <button
                onClick={() =>
                  setOpen(
                    open === index ? null : index
                  )
                }
                className="w-full text-left"
              >
                ✉️ {letter.title}
              </button>

              {open === index && (
                <p className="mt-4 text-zinc-600">
                  {letter.content}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
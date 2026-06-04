"use client";

import { timeline } from "@/data/timeline";
import { useState } from "react";
import Image from "next/image";

export default function Timeline() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">

        <p className="{`${playfair.className} uppercase tracking-[0.3em] text-sm text-zinc-500 text-center">
          Nossa História
        </p>

        <div className="mt-16 space-y-6">

          {timeline.map((item, index) => (
            <div
              key={item.title}
              className="border-l-2 border-zinc-300 pl-6"
            >
              <button
                onClick={() =>
                  setSelected(
                    selected === index ? null : index
                  )
                }
                className="text-left"
              >
                <p className="text-sm text-zinc-500">
                  {item.date}
                </p>

                <h3 className="text-xl font-medium mt-1">
                  {item.title}
                </h3>
              </button>

              {selected === index && (
                <div className="mt-6">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={300}
                    className="rounded-2xl"
                  />

                  <p className="mt-4 text-zinc-600">
                    {item.description}
                  </p>

                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
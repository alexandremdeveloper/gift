import Image from "next/image";
import { moments } from "@/data/moments";

export default function Moments() {
  return (
    <section className="py-32 px-6">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-light text-center">
          Pequenos Instantes
        </h2>

        <div className="mt-16 space-y-20">

          {moments.map((moment, index) => (
            <div key={index}>

              <Image
                src={moment.image}
                alt=""
                width={400}
                height={600}
                className="
                  mx-auto
                  rounded-3xl
                  shadow-lg
                  max-w-md
                  md:max-w-lg
                  w-full
                "
              />

              <p className="mt-6 text-center text-zinc-600 italic">
                {moment.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
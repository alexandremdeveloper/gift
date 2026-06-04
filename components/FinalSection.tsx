"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FinalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.6,
      }
    );

    const current = sectionRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const timer1 = setTimeout(() => {
      setStep(1);
    }, 2500);

    const timer2 = setTimeout(() => {
      setStep(2);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-8 text-center"
    >
      <div className="max-w-4xl">

        <AnimatePresence mode="wait">

          {step === 0 && (
            <motion.h2
              key="fim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-light"
            >
              Fim?
            </motion.h2>
          )}

          {step === 1 && (
            <motion.h2
              key="ainda-nao"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-light"
            >
              Ainda não.
            </motion.h2>
          )}

          {step === 2 && (
            <motion.div
              key="mensagem-final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <p className="text-4xl md:text-6xl leading-relaxed font-light">

                Entre bilhões de pessoas.

                <br />
                <br />

                Eu ainda escolheria você.

              </p>

              <p className="mt-16 text-zinc-500">
                Essa é apenas a primeira página. ❤️
              </p>
              <br />
              <p className="mt-16 text-zinc-500">
                Continua sendo escrita todos os dias.
              </p>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
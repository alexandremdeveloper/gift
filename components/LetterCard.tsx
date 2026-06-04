"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  content: string;
};

export default function LetterCard({
  title,
  subtitle,
  content,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <motion.div
        whileHover={{
          y: -4,
        }}
        transition={{
          duration: 0.2,
        }}
        className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-6 text-left"
        >
          <p className="text-sm text-zinc-500">
            {subtitle}
          </p>

          <h3 className="mt-2 text-xl font-medium">
            {title}
          </h3>

          <p className="mt-4 text-zinc-400">
            {open ? "Fechar ↑" : "Abrir ↓"}
          </p>
        </button>

        {/* Envelope */}
        <motion.div
          animate={{
            rotateX: open ? 180 : 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="h-10 origin-top bg-zinc-100"
          style={{
            clipPath:
              "polygon(0 0,100% 0,50% 100%)",
          }}
        />

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{
                  y: 30,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                }}
                className="px-6 pb-8"
              >
                <div className="mb-6 h-px bg-zinc-200" />

                <p className="whitespace-pre-line leading-8 text-zinc-700">
                  {content}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

    </div>
  );
}
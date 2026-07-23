"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Memory } from "./types";

type Props = {
    memory: Memory | null;
    onClose: () => void;
};

export default function PhotoViewer({
    memory,
    onClose,
}: Props) {

    return (

        <AnimatePresence>

            {memory && (

                <motion.div

                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/70
                        backdrop-blur-md
                    "

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}

                    onClick={onClose}

                >

                    <motion.div

                        onClick={(e) => e.stopPropagation()}

                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}

                    >

                        <motion.img

                            layoutId={memory.id}

                            src={memory.image}

                            className="
                                w-[420px]
                                rounded-xl
                                shadow-2xl
                            "

                        />

                        <motion.h2

                            initial={{
                                opacity: 0,
                                y: 15
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            exit={{
                                opacity: 0,
                                y: 15
                            }}

                            className="
                                mt-6
                                text-center
                                text-3xl
                                font-bold
                                text-white
                            "

                        >
                            {memory.title}

                        </motion.h2>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    );

}
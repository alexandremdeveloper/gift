"use client";

import { motion } from "framer-motion";
import { Memory } from "./types";

type Props = {
    memory: Memory;

    position: {
        x: number;
        y: number;
        rotate: number;
    };

    onClick: () => void;
};

export default function MemoryPhoto({
    memory,
    position,
    onClick,
}: Props) {

    return (

        <motion.img

            src={memory.image}

            layoutId={memory.id}

            onClick={onClick}

            initial={{
                x: 0,
                y: 100,
                scale: 0.5,
                rotate: 0,
                opacity: 0,
            }}

            animate={{
                x: position.x,
                y: position.y,
                scale: 1,
                rotate: position.rotate,
                opacity: 1,
            }}

            transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
            }}

            whileHover={{
                scale: 1.08,
                rotate: 0,
                zIndex: 10,
            }}

            className="
                absolute
                left-1/2
                top-1/2
                w-28
                rounded-xl
                shadow-2xl
                cursor-pointer
                bg-white
            "

        />

    );

}
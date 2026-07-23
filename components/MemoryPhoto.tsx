"use client";

import { motion } from "framer-motion";

type Props = {
    photo: string;
    index: number;
    position: {
        x: number;
        y: number;
        rotate: number;
    };
};

export default function MemoryPhoto({
    photo,
    index,
    position,
}: Props) {
    return (
        <motion.img
            src={photo}
            className="
                absolute
                w-52
                h-64
                object-cover
                bg-white
                pt-3
                px-3
                pb-8
                rounded-sm
                shadow-[0_25px_50px_rgba(0,0,0,.35)]
                shadow-xl
                hover:shadow-[0_40px_80px_rgba(0,0,0,.45)]
                transition-shadow
                duration-300
                cursor-pointer
            "
            style={{
                zIndex: index,
            }}
            initial={{
                x: 0,
                y: 0,
                scale: 0.1,
                opacity: 0,
                rotate: 0,
            }}
            animate={{
                x: position.x,
                y: position.y,
                rotate: [
                    position.rotate,
                    position.rotate + 1.5,
                    position.rotate - 1,
                    position.rotate,
                ],
                scale: 1,
                opacity: 1,
            }}
            transition={{
                delay: index * 0.12,
                x: {
                duration: 2,
                type: "spring",
                stiffness: 45,
                damping: 10,
                },
                y: {
                    duration: 2,
                    type: "spring",
                    stiffness: 45,
                    damping: 10,
                },
                rotate: {
                    delay: 2.2,
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
            whileHover={{
                y: position.y - 20,
                scale: 1.08,
                rotate: position.rotate + 2,
                zIndex: 999,
            }}
            whileTap={{
                scale: 0.97
            }}
        />
    );
}
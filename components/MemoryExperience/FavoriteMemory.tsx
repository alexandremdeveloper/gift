"use client";

import { motion } from "framer-motion";


interface Props {
    onContinue:()=>void;
}


export default function FavoriteMemory({
    onContinue
}:Props){

    return (

        <motion.div

            className="
                flex
                flex-col
                items-center
                text-center
            "

            initial={{
                opacity:0,
                y:30
            }}

            animate={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:1
            }}

        >

            {/* foto */}

            <div
                className="
                    bg-white
                    p-4
                    shadow-2xl
                    rotate-[-3deg]
                "
            >

                <img
                    src="/photos/maos_dadas.jpg"
                    className="
                        w-80
                        h-96
                        object-cover
                    "
                />


                <p
                    className="
                        mt-4
                        font-light
                        text-zinc-600
                    "
                >
                    Uma das minhas fotos favoritas ❤️
                </p>


            </div>


            {/* texto */}

            <motion.p

                className="
                    mt-12
                    max-w-xl
                    text-xl
                    leading-9
                    text-zinc-600
                "

                initial={{
                    opacity:0
                }}

                animate={{
                    opacity:1
                }}

                transition={{
                    delay:1
                }}

            >

                Eu amo essa foto...
                <br />

                mas o mais bonito é saber que ela é apenas uma
                entre tantas memórias que ainda carregamos juntos.

            </motion.p>


            <button

                onClick={onContinue}

                className="
                    mt-10
                    px-8
                    py-3
                    rounded-full
                    bg-black
                    text-white
                    text-sm
                    tracking-widest
                    uppercase
                "

            >

                Continuar

            </button>


        </motion.div>

    )

}
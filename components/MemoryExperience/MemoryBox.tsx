"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { wait } from "./utils";

interface Props{
    onFinish:()=>void;
}

export default function MemoryBox({onFinish}:Props){

    const [stage,setStage]=useState<
    "idle"|
    "press"|
    "opening"|
    "light"
    >("idle");

    const photos = [
        "/photos/beijo_evento.jpg",
        "/photos/cartinha.jpg",
        "/photos/cartinha_chao.jpg",
        "/photos/declaracao.jpg",
        "/photos/declaracao_dois.jpg",
        "/photos/lego.jpg",
        "/photos/mensagem_cafeteria.jpg",
        "/photos/pedido.jpg",
        "/photos/petropolis_casa_alemao.jpg",
        "/photos/petropolis_onibus.jpg",
        "/photos/presente.jpg",
        "/photos/selfie_um.jpg",
        "/photos/stitch.jpg",
        "/photos/treino_dois.jpg",
    ]

    async function open(){

        setStage("press");

        await wait(250);

        setStage("opening");

        await wait(800);

        setStage("light");

        await wait(1200);

        onFinish();

    }

    return(

        <div className="flex flex-col items-center">

            <h2 className="text-5xl font-light">
                Nossa Caixa de Memórias
            </h2>

            <p className="mt-6 text-zinc-500 max-w-lg text-center leading-8">
                Algumas lembranças são especiais demais para ficarem escondidas.
            </p>

            <motion.div

                className="relative mt-20 cursor-pointer"
                style={{
                    perspective: "1200px"
                }}

                onClick={open}

                animate={{
                    scale:stage==="press"?0.97:1
                }}

                transition={{
                    duration:.25
                }}

            >

                <motion.div

                    className="
                        absolute
                        -inset-10
                        rounded-full
                        bg-yellow-200/30
                        blur-3xl
                    "

                    animate={{

                        opacity:
                        stage==="light"
                        ?1
                        :0

                    }}

                    transition={{
                        duration:1
                    }}

                />

                {/* tampa */}

                <motion.div

                    style={{
                        transformOrigin:"top center",
                        transformStyle:"preserve-3d"
                    }}

                    animate={{

                        rotateX:

                        stage==="opening"||
                        stage==="light"

                        ?-140

                        :0

                    }}

                    transition={{
                        duration:.8
                    }}

                    className="
                        w-80
                        h-10
                        rounded-t-xl
                        bg-gradient-to-r
                        from-amber-700
                        to-amber-600
                    "

                />

                <motion.div

                className="
                    absolute
                    left-1/2
                    bottom-10
                    -translate-x-1/2
                    flex
                    gap-2
                "

                animate={{
                    y: stage==="light" ? -80 : 0,
                    opacity: stage==="light" ? 1 : 0
                }}

                transition={{
                    duration:1
                }}

            >

            {photos.map((photo,index)=>(

                <motion.img

                    key={index}

                    src={photo}

                    className="
                        w-20
                        h-24
                        object-cover
                        shadow-xl
                        bg-white
                    "

                    initial={{
                        rotate: index === 0 ? -12 : index === 1 ? 8 : -3
                    }}

                />

))}
                

                

            </motion.div>
                <div
                    className="
                        absolute
                        top-10
                        left-0
                        w-80
                        h-44
                        rounded-b-xl
                        bg-black/30
                        shadow-inner
                    "
                />
                {/* caixa */}

                <div className="
                    w-80
                    h-52
                    rounded-b-xl
                    bg-gradient-to-b
                    from-amber-600
                    to-amber-800
                    shadow-2xl
                "/>

            </motion.div>

            <p className="mt-10 text-sm uppercase tracking-[.4em] text-zinc-500">
                Clique na caixa
            </p>

        </div>

    )

}
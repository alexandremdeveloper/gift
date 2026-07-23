"use client";

import { memories } from "./memories";
import { Memory } from "./types";
import MemoryPhoto from "./MemoryPhoto";
import { positions } from "./utils";

type Props = {
    onSelect: (memory: Memory) => void;
};

export default function MemoryTable({
    onSelect,
}: Props) {

    return (

        <div
            className="
                relative
                mx-auto
                mt-20
                h-[650px]
                w-full
                max-w-6xl
            "
        >

            {memories.map((memory, index) => {

                const position = positions[index];

                return (

                    <MemoryPhoto
                        key={memory.id}
                        memory={memory}
                        position={position}
                        onClick={() => onSelect(memory)}
                    />

                );

            })}

        </div>

    );

}
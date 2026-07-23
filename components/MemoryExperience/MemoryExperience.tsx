"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";

import MemoryBox from "./MemoryBox";
import MemoryTable from "./MemoryTable";
import PhotoViewer from "./PhotoViewer";
import { Memory } from "./types";

export default function MemoryExperience() {

    const [opened, setOpened] = useState(false);

    const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

    return (

        <LayoutGroup>

            {!opened ? (

                <MemoryBox
                    onFinish={() => setOpened(true)}
                />

            ) : (

                <MemoryTable
                    onSelect={setSelectedMemory}
                />

            )}

            <AnimatePresence>

                {selectedMemory && (

                    <PhotoViewer
                        memory={selectedMemory}
                        onClose={() => setSelectedMemory(null)}
                    />

                )}

            </AnimatePresence>

        </LayoutGroup>

    );

}
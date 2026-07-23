"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("music-playing");
    if (saved === "true") {
      setPlaying(true);
    }
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch(() => {
        // O navegador pode bloquear se não houver interação do usuário.
      });
    } else {
      audioRef.current.pause();
    }

    localStorage.setItem("music-playing", String(playing));
  }, [playing]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Erro ao reproduzir áudio:", error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="/audio/musica_um.mpeg"
      />

      <button
  onClick={toggleMusic}
  className="
    fixed
    bottom-5
    right-5
    z-50
    group
    flex
    items-center
    justify-center
    w-20
    h-20
    rounded-full
    bg-white/20
    backdrop-blur-md
    shadow-xl
    transition-transform
    hover:scale-105
  "
>
  <img
    src="/icons/vinil.jpg"
    alt="Vinil"
    className={`w-16 h-16 transition-all duration-300 ${
      playing ? "animate-spin-slow" : ""
    }`}
  />

  <span
    className="
      absolute
      -top-10
      whitespace-nowrap
      rounded-lg
      bg-black/70
      px-3
      py-1
      text-sm
      text-white
      opacity-0
      transition-opacity
      group-hover:opacity-100
    "
      >
        {playing ? "⏸️ Pausar música" : "🎵 Nossa música"}
      </span>
    </button>
    </>
  );
}
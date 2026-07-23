"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function MemoryCarousel() {
  const memories = [
    {
      img: "/photos/capsula_tempo.jpg",
      text: "Abrir em 2 anos, como uma capsula do tempo 💖",
    },
    {
      img: "/photos/dinossauro.jpg",
      text: "O primeiro presente que você me deu 🦖",
    },
    {
      img: "/photos/petropolis_guarda_chuva_dois.jpg",
      text: "Momentos que eu guardo comigo ☔",
    },
    {
      img: "/photos/petropolis_onibus.jpg",
      text: "Primeira viagem de muitas que ainda vamos fazer juntos 🚌",
    },
    {
      img: "/photos/primeiro_cinema.jpg",
      text: "Momentos que eu guardo comigo 🎬",
    },
    {
      img: "/photos/primeiro_treino.jpg",
      text: "Momentos que eu guardo comigo",
    },
    {
      img: "/photos/seflie_cama.jpg",
      text: "Momentos que eu guardo comigo 💤",
    },
    {
      img: "/photos/xicaras.jpg",
      text: "Momentos que eu guardo comigo",
    },
  ];

  return (
    <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 text-center">
                Memórias que ficaram
                </p>

            <h2 className="text-4xl font-light text-center mt-6">
                Os momentos que fazem meu coração ter certeza de que encontrei você.
            </h2>
            <div className="memory-wrapper">    
                <Swiper
                    modules={[Grid, Autoplay, Pagination]}
                    slidesPerView={2}
                    slidesPerGroup={2}
                    centeredSlides={false}
                    loop={true}
                    spaceBetween={20}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    speed={900}
                    >
                    {memories.map((item, i) => (
                    <SwiperSlide key={i} className="memory-slide">
                        <div className="card">
                        <img src={item.img} />
                        <p>{item.text}</p>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
  );
}
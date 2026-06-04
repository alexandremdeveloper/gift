export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/photos/capa.jpg')",
      }}
    >
      {/* Sobreposição escura */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">

        <h1 className="text-5xl font-bold">
          Alexandre ❤️ Diego
        </h1>

        <p className="mt-4 text-lg">
          Desde 11 de Maio de 2026
        </p>

        <p className="mt-10 max-w-md text-white/80">
          Algumas histórias merecem ser guardadas para sempre.
        </p>

        {/* <p className="mt-8 max-w-md text-sm">
          Uma pequena coleção dos momentos
          que fizeram você se tornar minha pessoa favorita.
        </p> */}

        <a
          href="#contador"
          className="mt-16 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Começar ↓
        </a>

      </div>
    </section>
  );
}